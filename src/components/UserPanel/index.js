import React from 'react';
import { MainButton, NavPanel, NavPanelItem } from '../../styles';
import { Select } from '../Select';
import { Link } from 'react-router-dom';
import { useCart } from '../../Contexts/CartContext';

export const UserPanel = () => {
    const { pizzas, getTotalAmount } = useCart();
    return (
        <NavPanel>
            <NavPanelItem>
                <Select options={['Euro', 'USD']}/>
            </NavPanelItem>
            <NavPanelItem>
                <MainButton as={Link} to="/login">
                    Login
                </MainButton>
            </NavPanelItem>
            <NavPanelItem>
                <MainButton as={Link} to="/cart">
                    <span>
                        { pizzas.length ? getTotalAmount() + ' ' : ''} 
                    </span>
                    Cart
                </MainButton>
            </NavPanelItem>
        </NavPanel>
    )
}