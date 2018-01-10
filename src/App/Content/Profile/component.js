import React, {Component} from 'react';
import './styles.css';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import EventIcon from 'material-ui/svg-icons/notification/event-note';
import PersonIcon from 'material-ui/svg-icons/social/person';
import RateReviewIcon from 'material-ui/svg-icons/maps/rate-review';
import ScheduleIcon from 'material-ui/svg-icons/action/schedule';
import EventAvaibleIcon from 'material-ui/svg-icons/notification/event-available';
import Chip from 'material-ui/Chip';
import ProfileEvents from './ProfileEvents/index';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'

class Profile extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="profile__container">
                <div className="profile__image">
                    <Avatar className="profile__image-avatar" icon={
                        <PersonIcon  />
                    }/>
                    <div className="profile__information text-right">
                        <div>
                            <strong>{ `${user.firstName} ${user.lastName}` }</strong>
                        </div>
                        <div className="profile__subtitle">{ user.subtitle }</div>
                        <div className="profile__tags">
                            {
                                (Array.isArray(user.tags))
                                    ? user.tags.map(tag => (<Chip className="m-sm">{tag}</Chip>))
                                    : null
                            }
                        </div>
                        <div>
                            <Link to={`/create-event`}>
                                <RaisedButton label="Create event"
                                              primary={true}
                                              style={{
                                                  'flex': '0 0 auto'
                                              }}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="profile__tabs-container">
                    <Tabs className="profile__tabs">
                        <Tab icon={<EventIcon />}>
                            <ProfileEvents title="My events"/>
                        </Tab>
                        <Tab icon={<EventAvaibleIcon />}>
                            <ProfileEvents title="Approved events"/>
                        </Tab>
                        <Tab icon={<ScheduleIcon />}>
                            <ProfileEvents title="Requested events"/>
                        </Tab>
                        <Tab icon={<RateReviewIcon />}/>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Profile;
