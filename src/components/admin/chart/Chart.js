import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

 export const options = {
    responsive: true,
    plugins: {
      legend:null,
      title: null,   
    
    },    
  };

const Chart = () => {

  const {orderHistory} = useSelector((state)=> state.orders);
    
  const array = [];
  orderHistory.map((item) => {
    const { orderStatus } = item;
    return array.push(orderStatus);
  });

  const getOrderCount = (arr, value) => {
    return arr.filter((n) => n === value).length;
  };

  const [q1, q2, q3, q4] = ['Pendientes', 'Procesando', 'Enviado', 'Entregado'];

  const placed = getOrderCount(array, q1);
  const processing = getOrderCount(array, q2);
  const shipped = getOrderCount(array, q3);
  const delivered = getOrderCount(array, q4);

  console.table(array, q1, q2, q3, q4);

    const barColors = [
        '#ffc107',
        '#a5e5ff',
        '#51b9d0',
        '#28a745',
      ];
    

    const data = {
        labels : ['Pendientes', 'Procesando', 'Enviados', 'Entregados'],
        datasets: [
          {
            data: [placed, processing, shipped, delivered],
            backgroundColor: barColors,
            borderRadius:36,
            barThickness: 40,
          },
        ],
      };

    return (

        <ChartContainer >
            <div className='card'>
            <h3>Estadisticas de pedidos</h3>
            <Bar options={options} data={data}  />
            </div>
        
        </ChartContainer>
    );
}

export default Chart;


const ChartContainer = styled.div`
  
    .card {
        border: 1px solid #ccc;   
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
    }
    
`;


