import React from 'react';

import Logo from '../../Logo/Logo';
import logoClasses from '../../Logo/Logo.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

import classes from './SideDrawer.module.css';

// import NavigationItem from './NavigationItem/NavigationItem';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    const logoSidebarStyle = logoClasses.LogoSidebar

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo customClass={logoSidebarStyle} />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;