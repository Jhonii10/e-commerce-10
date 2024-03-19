import React, { useEffect, useState } from 'react';
import CheckoutSummary from '../../components/checkout/checkoutSummary/CheckoutSummary';
import { CheckoutForm } from '../../components/checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { CALCULATE_SUBTOTAL, CALCULATE_TOTAL_QUANTITY } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';
import { CheckoutDetailsContainer } from './CheckoutContainer';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



const Checkout = () => {

    const dispatch = useDispatch();
    const {cartItems ,cartTotalAmount,} = useSelector((state)=>state.cart)
    const {shippingDate ,shippingAddress,} = useSelector((state)=>state.checkout)

    const description = `Tienda payment: email: ${shippingDate.email}, Amount: ${cartTotalAmount}`


    useEffect(() => {
        dispatch(CALCULATE_SUBTOTAL())
        dispatch(CALCULATE_TOTAL_QUANTITY())
    }, [dispatch, cartItems]);

    const [clientSecret, setClientSecret] = useState("");
    const [message, setMessage] = useState('Iniciando pago');

    useEffect(() => {
         
        // Create PaymentIntent as soon as the page loads
        // http://localhost:4242/create-payment-intent
        fetch("https://ecommerce-10.up.railway.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: cartItems,
            userEmail:shippingDate.email,
            date:shippingDate,
            shipping:shippingAddress,
            description:description,
            

        }),
        })
          .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return res.json().then((json)=>Promise.reject(json))
          })
          .then((data) => {
            setClientSecret(data.clientSecret);
          }).catch((error)=>{
            setMessage('error al iniciar checkout');
            toast.error('Algo salio mal')
          });
      }, [cartItems, description, shippingAddress, shippingDate]);


    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      }


    return (
        <CheckoutDetailsContainer>
        <div className='container'>
            <div className='row'>
                <div className='col col-1'>
                <CheckoutSummary/>
                </div>
                <div className='col col-2'>
                <div className='card-stripe'>

                {!clientSecret && <h3>{message}</h3>}
                {clientSecret && (

                    <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                    </Elements>
                )}
                </div>
                </div>
            </div>
        </div>
        
        
            
        </CheckoutDetailsContainer>
    );
}

export default Checkout;
