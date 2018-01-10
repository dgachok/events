import React, {Component} from 'react';
import Login from '../Auth/Login/index';
import Events from '../Content/Events/index';
import Profile from '../Content/Profile/index';
import Messages from '../Content/Messages/index';
import Event from '../Content/Event/index';
import Notifications from '../Content/Notifications/index';
import Registration from '../Auth/Registration/index';
import Footer from './../Core/Footer/index';
import {Route, Switch, Redirect} from 'react-router-dom'
import {requireAuthentication} from "../Auth/AuthenticatedComponent";

class Core extends Component {
    render() {
        return (
            <div className="container__content">
                <div className="content">
                    <Switch>
                        <Route path={`/login`} component={Login}/>
                        <Route path={`/registration`} component={Registration}/>
                        <Route path={`/events`} component={requireAuthentication(Events)}/>
                        <Route path={`/profile`} component={requireAuthentication(Profile)}/>
                        <Route path={`/messages`} component={requireAuthentication(Messages)}/>
                        <Route path={`/create-event`} component={requireAuthentication(Event)}/>
                        <Route path={`/notifications`} component={requireAuthentication(Notifications)}/>
                        <Redirect from="/*" to="/login"/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Core;
