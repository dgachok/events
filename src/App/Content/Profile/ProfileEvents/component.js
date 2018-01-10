import React, {Component} from 'react';
import './styles.css';

class ProfileEvents extends Component {
    render() {
        const {title} = this.props;
        return (
            <div>
                <div className="profile-content__events-header">
                    <div className="profile-content__events-title">
                        <strong>{ title }</strong>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileEvents;
