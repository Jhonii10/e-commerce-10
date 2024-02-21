import styled from "styled-components";

export const CheckoutDetailsContainer = styled.section`

    .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    padding-bottom: 24px;
    padding-top: 24px
    }

    .row {

        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;

        .col{
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;

        }

        .col-1{
            flex: 0 0 58.33333333%;
            max-width: 58.33333333%;

        }

        .col-2{
            flex: 0 0 41.66666667%;
    max-width: 41.66666667%;

        }

        .col-sm-10 {
            flex: 0 0 50%;
            max-width: 50%;
        }

    }

    
    .card-stripe {
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            padding:12px;


            


#payment-message {
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
}

#payment-element {
  margin-bottom: 24px;
}

/* Buttons and links */
button {
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}

button:hover {
  filter: contrast(115%);
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}


}


    @media screen and (max-width:  768px) {

    .row{
    .col-1{
    flex: 0 0 100%;
    max-width: 100%;
    }

    .col-2{
        flex: 0 0 100%;
        max-width: 100%;

    }

    
    }
    }

`;