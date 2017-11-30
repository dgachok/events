import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './styles.css';
import logo from './../../../images/logo.png';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__inner">
                    <Link to={`/`}>
                        <img className="header__logo" alt="logo" src={logo}/>
                    </Link>
                    <nav>
                        <ul className="header__navigation">
                            <li className="navigation__item">
                                <NavLink  to={`/login`}
                                      activeClassName="navigation__active">
                                    Login
                                </NavLink >
                            </li>
                            <li className="navigation__item">
                                <NavLink  className="navigation__button" to={`/registration`}
                                      activeClassName="navigation__active">
                                    Registration
                                </NavLink >
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
