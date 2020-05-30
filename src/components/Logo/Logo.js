import React from 'react';

import burgerLogo from '../../assets/images/mstile-310x310.png';
import classes from './Logo.module.css';

const logo = (props) => {
    let divStyle = props.customClass ? props.customClass : classes.Logo;

    return (
        <div className={divStyle} style={{height: props.height}}> 
            <img src={burgerLogo} alt="burger logo" />
        </div>
)};

export default logo;