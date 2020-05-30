import React from 'react';

import BurgerSvg from '../../../assets/svgs/menu.svg';

import classes from './BurgerMenu.module.css';

const burgerMenu = (props) => (
    <div className={classes.BurgerMenu} onClick={props.clicked}>
        <img src={BurgerSvg} alt="burger menu icon" />
    </div>
);

export default burgerMenu;