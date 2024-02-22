import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const CheckoutForm =() =>{
  const stripe = useStripe();
  const elements = useElements();


  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const saveOrder = ()=>{
    //save the order in your database here
    console.log('Order saved');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null)

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);


   await stripe
    .confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url:"http://localhost:3000/checkout/payment-success",
      },
      redirect:'if_required'
    }).then((res)=>{

        if (res.error) {
            toast.error(res.error.message)
            setMessage(res.error.message)
            return;
        }
        if(res.paymentIntent){
            if (res.paymentIntent.status === 'succeeded') {
                setIsLoading(false);
                toast.success('Pago exitoso');
                saveOrder();
            }
        }
    });

    setIsLoading(false);
  
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar ahora"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}


export default CheckoutForm;
