import React, {Component} from 'react';
import './styles.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Core/Header/component';
import Main from './Main/component';
import Core from './Core/component';
import Error from './Core/Error/index';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/" component={Core}/>
                </Switch>
                <Error />
            </div>
        );

    }
}

export default App;
