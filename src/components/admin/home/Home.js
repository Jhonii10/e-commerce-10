import React from 'react';
import styled from 'styled-components';
import InfoBox from '../../infoBox/InfoBox';
import { FcSalesPerformance } from "react-icons/fc";
import { BsCart4 } from "react-icons/bs";
import { TbShoppingCartShare } from "react-icons/tb";



// iconos 
const earning = <FcSalesPerformance size={40} />;
const Products = <BsCart4 size={40} color='blue'/>
const orders = <TbShoppingCartShare size={40} color='red'/>


const Home = () => {


    return (
        <HomeContainer>
            <div className='home'>
                <h2>Bienvenido administrador</h2>
                <div className='grid-container'>
                    <InfoBox
                        cardClass={'card  card1'}
                        title="Ventas"
                        count={'$7.000.000'}
                        icon={earning}
                    />
                    <InfoBox
                        cardClass={'card  card2'}
                        title="Productos"
                        count={12}
                        icon={Products}
                    />
                    <InfoBox
                        cardClass={'card  card3'}
                        title="Pedidos"
                        count={10}
                        icon={orders}
                    />

                </div>

            </div>
        </HomeContainer>
    );
}

export default Home;


const HomeContainer = styled.div`

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 12px;
    }

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