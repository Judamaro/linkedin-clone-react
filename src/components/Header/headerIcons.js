import React from 'react';
import './styles.css'

export const HeaderIcons = ({Icon, Title}) => {
    return (
        <div className="header_icon">
            {Icon && <Icon className="icon"/>}
            <h3>{Title}</h3>
        </div>
    );
}