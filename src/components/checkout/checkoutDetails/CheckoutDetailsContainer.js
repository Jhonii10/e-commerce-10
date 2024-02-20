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


    .form-group{
        margin-bottom: 1rem;        
    }

    .form-control {
            display: block;
            width: 100%;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .label-field {
            text-transform: capitalize;
            font-size: 12px;
            font-weight: 500;
            line-height: 95%;
            color: #666;
            letter-spacing: 0.5px;
            margin: 0;
        }

    .card {
            margin: 0 0 -1px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;

            .step-header {
                text-align: center;
                background: #ededed;
                background: linear-gradient(0deg, #ededed 0%, whitesmoke 100%);
                padding: 16px;
                color: #3f3f3f;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 100%;
                border-bottom: 1px solid #ddd;
            }

            .card-body {
                flex: 1 1 auto;
                min-height: 1px;
                padding: 1.25rem;

            }

            
    }


    .select-address-box {
    padding: 25px 0 0 0;
        h4{
            font-size: 15px;
            color: #009933;
            text-align: center;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 5px 0;
        }

        .address-alert {
            text-align: center;
            margin: 0 0 8px 0;
            font-size: 13px;
            line-height: 100%;
            font-weight: bold;
            color: #b53238;
        }

        

    }

    .new-address {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 0;
    
    }
    .dir-line {
    margin-bottom: 12px;
    }

    .terms-block {
        border: 1px solid #b6e1e8;
        display: block;
        padding: 15px 15px;
        cursor: pointer;
        background: #cbe9ef;
        font-size: 14px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        margin-top: 1rem;

        div{
            input {
        margin: 3px 15px 0 0;

        }

        
    }
    }

    .proceed-to-checkout{
        display:flex;
        justify-content: center;
        padding: 20px 0 20px 0;
        .btn {
                margin-top: 5px;
                display: inline-block;
                border: 0;
                border-radius: 10px ;
                color: #fff;
                background-color: #8e0808;
                cursor: pointer;
                padding: 13px 22px;
                font-size: 17px;
                letter-spacing: 0.5px;
                font-weight: 700;
                font-family: 'Quicksand';          
        }
    }


    @media screen and (max-width:  992px) {

    .row{
    .col-1{
    flex: 0 0 100%;
    max-width: 100%;
    }

    .col-2{
        flex: 0 0 100%;
        max-width: 100%;

    }

    .col-sm-10 {
        flex: 0 0 100%;
        max-width: 100%;
        }
    }

    .card{
        margin-top: 12px;
    }

    }
`;