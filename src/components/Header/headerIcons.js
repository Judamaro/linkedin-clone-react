import React from 'react';
import { Avatar } from '@material-ui/core';
import './styles.css'

export const HeaderIcons = ({Icon, Title, Text, Profile}) => {
    return (
        <div className="header_icon">
            {Icon && <Icon className="icon_"/>}
            {Profile && <Avatar className="profile_"/>}
            {Title ? <h3>{Title}</h3> : <h3 className="text_">{Text}</h3>}           
        </div>
    );
}