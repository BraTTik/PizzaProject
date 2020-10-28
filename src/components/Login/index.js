import React from 'react';
import { AppLayout } from '../AppLayout';
import { LoginContainer, FormContainer } from '../../styles';
import { LoginForm } from './LoginForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SignUpForm } from './SigninForm';
import './TabStyles.css';


export const Login = () => {

    const LoginSubmit = (data) => {
        console.log(data);
    }
    const SignUpSubmit = (data) => {
        console.log(data);
    }
    return (
        <AppLayout>
            <LoginContainer>
                <FormContainer>
                    <Tabs>
                        <TabList className="tabs">
                            <Tab className="tabs_tab">Sign in</Tab>
                            <Tab className="tabs_tab">Sign up</Tab>
                        </TabList>
                        <TabPanel>
                            <LoginForm submit={LoginSubmit} />
                        </TabPanel>
                        <TabPanel>
                            <SignUpForm submit={SignUpSubmit}/>
                        </TabPanel>
                    </Tabs>
                </FormContainer>
            </LoginContainer>
        </AppLayout>
    )
}