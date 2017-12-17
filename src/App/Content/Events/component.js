import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';
import event1 from '../../../images/events-1.jpg';
import event2 from '../../../images/events-2.jpg';
import event3 from '../../../images/events-3.jpg';

class Events extends Component {
    render() {
        return (
            <div className="events__container">
                <div className="events__item">
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                        />
                        <CardMedia
                            
                        >
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
                            <FlatButton label="Interested" />
                            <FlatButton label="Going" />
                        </CardActions>
                    </Card>
                </div>
                <div className="events__item">
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                        />
                        <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
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
                            <FlatButton label="Interested" />
                            <FlatButton label="Going" />
                        </CardActions>
                    </Card>
                </div>
                <div className="events__item">
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                        />
                        <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
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
                            <FlatButton label="Interested" />
                            <FlatButton label="Going" />
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Events;
