import React from 'react';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../features/useSlice';
import { useSelector } from 'react-redux';

import './styles.css'

export const HeaderIcons = ({Icon, Title, Text, Profile, Logout}) => {

    const user = useSelector(selectUser)

    return (
        <div className="header_icon" onClick={Logout}>
            {Icon && <Icon className="icon_"/>}
            {Profile && (user ? <Avatar src={user?.photoURL} className="profile_">{user?.email[0]}</Avatar> : <Avatar className="profile_"/>)}
            {Title ? <h3>{Title}</h3> : <h3 className="text_">{Text}</h3>}           
        </div>
    );
}