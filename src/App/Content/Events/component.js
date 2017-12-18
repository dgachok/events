import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';
import event1 from '../../../images/events-1.jpg';
import event2 from '../../../images/events-2.jpg';
import event3 from '../../../images/events-3.jpg';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui/svg-icons/social/person';
import PeopleOutlineIcon from 'material-ui/svg-icons/social/people-outline';

class Events extends Component {
    render() {
        return (
            <div className="events__container">
                <div className="events__item">
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar={ <Avatar icon={ <PersonIcon  /> }/> }
                        />
                        <CardMedia>
                            <img src={event3} className="events__image" alt="" />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <div className="events__cards-button">
                                <FlatButton label="Interested" />
                                <div className="events__cards-group">
                                    <PeopleOutlineIcon  />
                                    <span className="events__cards-numbers">0</span>
                                </div>
                            </div>
                        </CardActions>
                    </Card>
                </div>
                <div className="events__item">
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar={ <Avatar icon={ <PersonIcon  /> }/> }
                        />
                        <CardMedia>
                            <img src={event2} className="events__image" alt="" />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <div className="events__cards-button">
                                <FlatButton label="Interested" />
                                <div className="events__cards-group">
                                    <PeopleOutlineIcon  />
                                    <span className="events__cards-numbers">20</span>
                                </div>
                            </div>
                        </CardActions>
                    </Card>
                </div>
                <div className="events__item">
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar={ <Avatar icon={ <PersonIcon  /> }/> }
                        />
                        <CardMedia>
                            <img src={event1} className="events__image" alt="" />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <div className="events__cards-button">
                                <FlatButton label="Interested" />
                                <div className="events__cards-group">
                                    <PeopleOutlineIcon  />
                                    <span className="events__cards-numbers">8</span>
                                </div>
                            </div>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Events;
