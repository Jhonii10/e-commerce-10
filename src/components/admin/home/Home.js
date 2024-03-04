import React from 'react';
import styled from 'styled-components';
import InfoBox from '../../infoBox/InfoBox';
import { FcSalesPerformance } from "react-icons/fc";
import { BsCart4 } from "react-icons/bs";
import { TbShoppingCartShare } from "react-icons/tb";
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { UseFetchCollection } from '../../../hooks/useFetchCollection';
import { useEffect } from 'react';
import { STORE_PRODUCTS } from '../../../redux/slice/productSlice';
import { CALC_TOTAL_ORDER_AMOUNT, STORE_ORDERS } from '../../../redux/slice/orderSlice';
import { UseFormatAmount } from '../../../hooks/useFormatAmount';

// ICONOS
const earning = <FcSalesPerformance size={40} />;
const Products = <BsCart4 size={40} color='blue'/>
const orders = <TbShoppingCartShare size={40} color='red'/>


const Home = () => {

    const {userName}= useSelector((state)=>state.auth)
    const {orderHistory , totalOrderAmount} = useSelector((state)=>state.orders)
    const products = useSelector((state)=>state.product.products);
    const dispatch = useDispatch();
    const {formatAmount} = UseFormatAmount()

    const fbProducts = UseFetchCollection('products');
    const {data} = UseFetchCollection('orders');
    
    useEffect(() => {
        dispatch(STORE_PRODUCTS({
                products : fbProducts.data
        }));
        dispatch(STORE_ORDERS(data));
        dispatch(CALC_TOTAL_ORDER_AMOUNT(data));

    }, [data, dispatch, fbProducts.data]);


    return (
        <HomeContainer>        
                <Container maxWidth="xl">
                <h2>Bienvenido {userName} 👋</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} sm={6}>
                    <InfoBox
                        cardClass={'card  card1'}
                        title="Ganancias"
                        count={`$${formatAmount(totalOrderAmount)}`}
                        icon={earning}
                    />
                    </Grid>
                

                
                    <Grid item xs={12} md={4} sm={6}>
                    <InfoBox
                        cardClass={'card  card2'}
                        title="Productos"
                        count={products.length}
                        icon={Products}
                    />
                    </Grid>
               

                
                    <Grid item xs={12} md={4} >
                    <InfoBox
                        cardClass={'card  card3'}
                        title="Pedidos"
                        count={orderHistory.length}
                        icon={orders}
                    />
                    </Grid>
                </Grid>



                </Container>

        </HomeContainer>
    );
}

export default Home;


const HomeContainer = styled.div`


    .card {
    border: 1px solid #ccc;   
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;

    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    }

    .card1 {
    border-bottom: 3px solid gold;
    }
    .card2 {
    border-bottom: 3px solid blue;
    }
    .card3 {
    border-bottom: 3px solid red;
    }
`;