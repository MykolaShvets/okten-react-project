import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

const Header: FC = () => {
    return (
        <div className={'header__wrapp'}>
<ul className={'menu'}>
    <li className={'menu__item'}>
        <NavLink to={'/'}>Home</NavLink>
    </li>
    <li className={'menu__item'}>
        <NavLink to={'/movies'}>Movies</NavLink>
    </li>
</ul>
        </div>
    );
};

export {Header};
