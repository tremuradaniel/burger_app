import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    
    openSideDrawerHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render () {
        return (
            <Auxiliary>
                <Toolbar openSideDrawer={this.openSideDrawerHandler} />
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
            </Auxiliary>
        )
        
    }    
}

export default Layout;
