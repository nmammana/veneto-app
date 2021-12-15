import React from 'react'

import './Cover.scss';
import logo from '../../assets/images/Logo.png';

export default function Cover({children}) {
    return (
        <div className="cover">
            {children}
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
        </div>
    )
}
