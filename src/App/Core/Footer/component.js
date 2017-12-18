import React, {Component} from 'react';
import './styles.css';

class Footer extends Component {
    showContacts = () => {
        this.props.showContacts();
    };

    render() {
        return (
            <footer className="footer">
                <span onClick={this.showContacts}
                      className="cursor-pointer">Contact us</span>
            </footer>
        );
    }
}

export default Footer;
