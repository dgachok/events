import React, {Component} from 'react';
import Login from '../Auth/Login/index';
import Registration from '../Auth/Registration/index';
import Footer from './../Core/Footer/component';
import {Route} from 'react-router-dom'

class Auth extends Component {
    render() {
        return (
            <div className="container__content">
                <div className="content">
                    <Route path={`/login`} component={Login}/>
                    <Route path={`/registration`} component={Registration}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Auth;
