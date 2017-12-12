import React, {Component} from 'react';
import Login from '../Auth/Login/index';
import Events from '../Content/Events/index';
import Registration from '../Auth/Registration/index';
import Footer from './../Core/Footer/component';
import {Route, Switch, Redirect} from 'react-router-dom'
import {requireAuthentication} from "../Auth/AuthenticatedComponent";

class Auth extends Component {
    render() {
        return (
            <div className="container__content">
                <div className="content">
                    <Switch>
                        <Route path={`/login`} component={Login}/>
                        <Route path={`/registration`} component={Registration}/>
                        <Route path={`/events`} component={requireAuthentication(Events)}/>
                        <Redirect from="/*" to="/login"/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Auth;
