import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';



const MoviesPage: FC = () => {
    return (
        <div>
                <Outlet/>
        </div>
    );
};

export {MoviesPage};
