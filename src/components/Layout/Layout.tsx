import React, {FC, useState} from 'react';
import {Outlet} from 'react-router-dom';

import './Layout.css'
import {Footer, Header} from "..";


const Layout: FC = () => {

    const [isLight, setIsLight] = useState(false);

    const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLight(e.target.checked)
    }


    return (
        <div className={isLight ? 'layout__light' : 'layout__dark'}>
            <header className={'header'}>
                <Header/>
            </header>
            <main className={'main'}>
                <Outlet/>
            </main>
            <footer>
                <Footer changeTheme={changeTheme}/>
            </footer>
        </div>
    );
};

export {Layout};
