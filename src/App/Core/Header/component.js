import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './styles.css';
import logo from './../../../images/logo.png';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import PersonIcon from 'material-ui/svg-icons/social/person';
import EmailIcon from 'material-ui/svg-icons/communication/email';

class Header extends Component {
    render() {
        const {isAuthenticated} = this.props;
        return (
            <header className="header">
                <div className="header__inner">
                    <Link to={`/events`}>
                        <img className="header__logo" alt="logo" src={logo}/>
                    </Link>
                    {
                        (isAuthenticated)
                            ?
                            <nav>
                                <ul className="header__navigation">
                                    <li className="navigation__item">
                                        <Badge
                                            badgeContent={0}
                                            className="navigation__icon"
                                            primary={true}
                                            badgeStyle={{top: 5, right: 2}}
                                        >
                                            <IconButton tooltip="Mails">
                                                <EmailIcon />
                                            </IconButton>
                                        </Badge>
                                    </li>
                                    <li className="navigation__item">
                                        <Badge
                                            badgeContent={0}
                                            primary={true}
                                            className="navigation__icon"
                                            badgeStyle={{top: 5, right: 7}}
                                        >
                                            <IconButton tooltip="Notifications">
                                                <NotificationsIcon />
                                            </IconButton>
                                        </Badge>
                                    </li>
                                    <li className="navigation__item">
                                        <Link to={`/profile`}>
                                            <Avatar className="navigation__avatar" icon={
                                                <PersonIcon  />
                                            }/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            :
                            <nav>
                                <ul className="header__navigation">
                                    <li className="navigation__item">
                                        <NavLink to={`/login`}
                                                 activeClassName="navigation__active">
                                            Login
                                        </NavLink >
                                    </li>
                                    <li className="navigation__item">
                                        <NavLink className="navigation__button" to={`/registration`}
                                                 activeClassName="navigation__active">
                                            Registration
                                        </NavLink >
                                    </li>
                                </ul>
                            </nav>
                    }

                </div>
            </header>
        );
    }
}

export default Header;
