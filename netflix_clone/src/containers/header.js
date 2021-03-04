import React from 'react';
import { Header } from '../components'; 
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.ButtonLink />
            </Header.Frame>
            {children}
        </Header>
    )
}