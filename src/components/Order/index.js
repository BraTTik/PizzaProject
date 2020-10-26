import React from 'react'
import { useAppState } from '../../Contexts/AppState';
import { AppLayout } from '../AppLayout';
import { OrderContainer } from '../../styles';
import { Redirect } from 'react-router-dom';
import { Total, MainButton } from '../../styles';

export const Order = () => {
    /* 
        details:
            currency: "EURO"
            pizzas: Array(2)
            0: {name: "Barbecue pizza", price: {…}, description: "Lorem ipsum dolor sit, amet consectetur adipisicin…amus qui in molestias voluptatem debitis tempora?", image: "/img/bbq-pizza.jpg", amount: 2}
            1: {name: "4 cheese", price: {…}, description: "Lorem ipsum dolor sit, amet consectetur adipisicin…amus qui in molestias voluptatem debitis tempora?", image: "/img/4-cheese-pizza.png", amount: 2}
            length: 2
        total: 43.96
        id: 1603720662327
        user:
            apartment: 1
            building: ""
            house: 2
            lastName: "2"
            name: "DMITRII NIKOLAEV"
            phone: "(891) 503-48-12"
            street: "Черноморский Бульвар"
    */
    const { state } = useAppState();
    const { order } = state;
    if(!order.id){
        return <Redirect to="/"/>;
    }
    return (
        <AppLayout>
            <OrderContainer>
                <h2>Order #{order.id}</h2>
                <div>
                    <h3>Customer contacts</h3>
                    <ul>
                        <li><strong>Name:</strong> {order.user.name}</li>
                        <li><strong>Phone:</strong> {order.user.phone}</li>
                        <li><strong>Delivery Address:</strong> {`${order.user.street}, ${order.user.house}${order.user.building&&'/'+order.user.building} apart: ${order.user.apartment}`}</li>
                    </ul>
                </div>
                <div>
                    <h3>Order details:</h3>
                    <ul>
                        {order.details.pizzas.map( (pizza, i) =>(
                            <li key={pizza.name + i}><strong>{pizza.amount} ✖ {pizza.name}</strong></li>
                        ))}
                    </ul>
                    <Total>Total: {order.details.currency === 'EURO' ? '€' : '$'}{order.details.total}</Total>
                </div>
                <div style={{textAlign: "right"}}>
                    <MainButton>
                        Place Order
                    </MainButton>
                </div>
            </OrderContainer>
        </AppLayout>
    )
}

