import React, {Component} from 'react';
import './styles.css';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import EventIcon from 'material-ui/svg-icons/action/event';
import PersonIcon from 'material-ui/svg-icons/social/person';
import RateReviewIcon from 'material-ui/svg-icons/maps/rate-review';

class Profile extends Component {
    render() {
        return (
            <div className="profile__container">
                <div className="profile__image">
                    <Avatar className="profile__image-avatar" icon={
                        <PersonIcon  />
                    }/>
                </div>
                <div className="profile__tabs-container">
                    <Tabs className="profile__tabs">
                        <Tab icon={<PersonIcon />}>

                        </Tab>
                        <Tab icon={<EventIcon />}>

                        </Tab>
                        <Tab icon={<RateReviewIcon />} />
                    </Tabs>
                </div>
                <div className="profile__content"></div>
            </div>
        );
    }
}

export default Profile;
