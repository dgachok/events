import React, {Component} from 'react';
import logo from '../logo.svg';
import './styles.css';

class App extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        const {users} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ul>
                    Users
                    {users.map((user) => (<li key={user._id}>{user.firstName} {user.lastName}</li>))}
                </ul>

            </div>
        );
    }
}

export default App;
