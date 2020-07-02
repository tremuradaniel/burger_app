import React, {Component} from 'react';
import { connect } from 'react-redux';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
                <Toolbar 
                    openSideDrawer={this.openSideDrawerHandler} 
                    isAuth={this.props.isAuthenticated}
                />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);
