import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import './Header.css'
import {UserInfo} from "../UserInfo/UserInfo";

const Header: FC = () => {

    const navigate = useNavigate();


    return (
        <header className={'header'}>
            <div className={'header__wrapp'}>
                <div className={'header__back'}>
                    <button onClick={() => navigate(-1)}
                            className={'header__btn'}
                    >{'< Back'}</button>
                </div>
                <ul className={'menu'}>
                    <li className={'menu__item'}>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li className={'menu__item'}>
                        <NavLink to={'/movies'}>Movies</NavLink>
                    </li>
                </ul>
                <div className={'header__user-info'}>
                    <UserInfo/>
                </div>
            </div>
        </header>
    );
};

export {Header};
