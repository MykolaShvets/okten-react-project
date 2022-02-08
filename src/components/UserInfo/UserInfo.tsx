import React, {FC} from 'react';

import './UserInfo.css'

const UserInfo: FC = () => {
    return (
        <div className={'user-info'}>
            <div className={'user__avatar'}/>
            <h3 className={'user__name'}>
                Leanne Graham
            </h3>
        </div>
    );
};

export {UserInfo};
