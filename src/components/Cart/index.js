import React from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '../AppLayout';
import { useCart } from '../../Contexts/CartContext';
import { EmptyCart } from './EmptyCart';
import { CartItem } from './CartItem';
import { useAppState } from '../../Contexts/AppState';
import { MainButton } from '../../styles';
import styled from 'styled-components';

const Total = styled.div`
    text-align: right;
    padding: 1rem;
    background-color: white;
    font-size: 1rem;
    font-weight: bold;
`

export const Cart = () => {
    const { pizzas, getTotal } = useCart();
    const { state } = useAppState();

    if(pizzas.length === 0){
        return (
            <AppLayout>
                <EmptyCart />
            </AppLayout>
        )
    }
    return(
        <AppLayout>
            {pizzas.map( (pizza, i) => <CartItem pizza={pizza} key={pizza.name + pizza.amount + i}/>)}
            <Total>
                <MainButton as={Link} to="/checkout">
                    Total: {state.currency === 'EURO' ? '€' : '$'}{getTotal().toFixed(2)}
                </MainButton>
            </Total>
        </AppLayout>
    )
}