import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <SideDrawer/>
        <div>
            Toolbar, Sidebar, Backdrop
        </div>
        <main className={classes.Content}>
            { props.children }
        </main>
    </Auxiliary>
)

export default layout;
