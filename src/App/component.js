import React, {Component} from 'react';
import './styles.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Core/Header/index';
import Main from './Home/component';
import Core from './Core/index';
import Error from './Core/Error/index';
import Contacts from './Contacts/index';

class App extends Component {
    componentDidMount() {
        this.checkAuth();
    }

    checkAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.initialize(token);
        } else {
            this.props.initialized();
        }
    }

    render() {
        const {isInitApp} = this.props;

        return (
            <div className="container">
                <Header/>
                {
                    isInitApp ?
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/" component={Core}/>
                        </Switch>
                        : null
                }
                <Error />
                <Contacts />
            </div>
        );

    }
}

export default App;
