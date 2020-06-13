import React from 'react';
import { Link } from 'react-router-dom';
import burgerLogo from '../../assets/images/mstile-310x310.png';
import classes from './Logo.module.css';

const logo = (props) => {
    let divStyle = props.customClass ? props.customClass : classes.Logo;

    return (
        <Link to="/">
            <div className={divStyle} style={{height: props.height}}> 
                <img src={burgerLogo} alt="burger logo" />
            </div>
        </Link>
)};

export default logo;