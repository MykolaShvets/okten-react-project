import React, {FC} from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../Header/Header";



const Layout: FC = () => {
    return (
        <div className={'layout__wrapp'}>
            <header className={'header'}>
                <Header/>
            </header>
            <main className={'main'}>
                <Outlet/>
            </main>
        </div>
    );
};

export {Layout};
