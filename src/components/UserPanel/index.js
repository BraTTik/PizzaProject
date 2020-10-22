import React from 'react';
import { MainButton, NavPanel, NavPanelItem } from '../../styles';
import { Select } from '../Select';


export const UserPanel = () => {
    return (
        <NavPanel>
            <NavPanelItem>
                <Select options={['Euro', 'USD']}/>
            </NavPanelItem>
            <NavPanelItem>
                <MainButton onClick={()=>{ console.log('login click')}}>
                    Login
                </MainButton>
            </NavPanelItem>
            <NavPanelItem>
                <MainButton onClick={()=>{console.log('Cart click')}}>
                    Cart
                </MainButton>
            </NavPanelItem>
        </NavPanel>
    )
}