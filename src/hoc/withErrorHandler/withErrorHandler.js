import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        };

        componentWillMount() {
            this.reqIncerceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resIncerceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqIncerceptor);
            axios.interceptors.response.eject(this.resIncerceptor);
        }

        errorConfirmeHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Auxiliary>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmeHandler}
                    >
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrapperComponent {...this.props}></WrapperComponent>
                </Auxiliary>
            )
        }
    }
};

export default withErrorHandler;
