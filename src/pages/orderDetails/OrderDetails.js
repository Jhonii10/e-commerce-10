import React, { useEffect } from 'react';
import { OrderDetailsContainer } from './OrderDetailsContainer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { UseFetchDocument } from '../../hooks/useFetchDocument';

const OrderDetails = () => {
    const {id} = useParams();
    const [order, setOrder] = useState(null);
    const {document} = UseFetchDocument('orders', id)

    console.log(document);

    useEffect(() => {
        setOrder(document)
    }, []);

    




    return (
        <OrderDetailsContainer>
            OrderDetails
        </OrderDetailsContainer>
    );
}

export default OrderDetails;
