import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) =>
        this.setState(...this.state, {[event.target.name]: event.target.value});

    onSubmit = (event) => {
        event.preventDefault();
        console.log('this.state', this.state);
        this.props.authenticate(this.state);
    };

    render() {
        return (
            <form className="auth__container">
                <div className="auth__image">
                    <h1 className="auth__image__title">Sign in</h1>
                </div>
                <div className="auth__information">
                    <div className="auth__title">
                        <h1>Authenticate Using</h1>
                        <p className="auth__pre-title">
                            Enabling users to sign in with their existing credentials <br />
                            is convenient for the users and shifts many of the complexities <br />
                            of managing the sign-in process onto a third party.
                        </p>
                        <div className="auth__external">
                            <img className="auth__network"
                                 alt="google"
                                 src={google} />
                            <img className="auth__network"
                                 alt="facebook"
                                 src={facebook} />
                        </div>
                    </div>
                    <div className="auth__form">
                        <div className="form__login">
                            <TextField
                                hintText="Email Field"
                                floatingLabelText="Email"
                                type="email"
                                name="email"
                                onChange={this.onChange}
                                fullWidth={true}
                            />
                        </div>
                        <div className="form__password">
                            <TextField
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password"
                                name="password"
                                onChange={this.onChange}
                                fullWidth={true}
                            />
                        </div>
                        <div className="form__submit">
                            <RaisedButton label="Submit"
                                          onClick={this.onSubmit}
                                          className="m-t-sm"
                                          type="submit" />

                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;
