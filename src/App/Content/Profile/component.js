import React, {Component} from 'react';
import './styles.css';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import EventIcon from 'material-ui/svg-icons/action/event';
import PersonIcon from 'material-ui/svg-icons/social/person';
import RateReviewIcon from 'material-ui/svg-icons/maps/rate-review';
import ScheduleIcon from 'material-ui/svg-icons/action/schedule';
import ContactsIcon from 'material-ui/svg-icons/communication/import-contacts';
import Chip from 'material-ui/Chip';
import ProfileEvents from './ProfileEvents/index';

class Profile extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="profile__container">
                <div className="profile__image">
                    <Avatar className="profile__image-avatar" icon={
                        <PersonIcon  />
                    }/>
                    <div className="text-right">
                        <strong>{ `${user.firstName} ${user.lastName}` }</strong>
                        <div className="profile__subtitle">rating</div>
                        <div className="d-flex">
                            {
                                (Array.isArray(user.tags))
                                    ? user.tags.map(tag => (<Chip className="m-w-sm">{tag}</Chip>))
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="profile__tabs-container">
                    <Tabs className="profile__tabs">
                        <Tab icon={<EventIcon />}>
                            <ProfileEvents />
                        </Tab>
                        <Tab icon={<ScheduleIcon />}/>
                        <Tab icon={<RateReviewIcon />}/>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Profile;
