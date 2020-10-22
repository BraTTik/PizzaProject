import React from 'react';
import { AppContainer, MainContainer, Header, HeaderContent, Title }from '../styles'
import { UserPanel } from './UserPanel';

export const AppLayout = ( { children }) => {
    return (
        <AppContainer>
            <Header>
                <MainContainer>
                    <HeaderContent>
                        <Title>
                            Mama Mia
                        </Title>
                        <UserPanel />
                    </HeaderContent>
                </MainContainer>
            </Header>
            <MainContainer>
                { children }
            </MainContainer>
        </AppContainer>
    )
}