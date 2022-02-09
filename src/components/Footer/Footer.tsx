import React, {FC} from 'react';
import {Switch} from "@mui/material";

import './Footer.css'

const Footer: FC<{ changeTheme: any }> = ({changeTheme}) => {
    return (
        <div className={'footer__wrapp'}>
            <h3>Light theme?</h3>
            <Switch onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeTheme(e)}/>
        </div>
    );
};

export {Footer};
