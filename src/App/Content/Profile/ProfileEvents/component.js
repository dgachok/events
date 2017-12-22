import React, {Component} from 'react';
import './styles.css';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileEvents extends Component {
    render() {
        return (
            <div className="profile-content__events-header ">
                <RadioButtonGroup name="events"
                                  defaultSelected="not_light"
                                  style={{
                                      'display': 'flex',
                                      'justify-content': 'flex-start',
                                      'flex': '1 1 100%',
                                      'align-items': 'center'
                                  }}>
                    <RadioButton
                        value="your"
                        label="Your events"
                        style={{
                            flex: '1 1 auto',
                            display: 'block'
                        }}
                    />
                    <RadioButton
                        value="approved"
                        label="Approved events"
                        style={{
                            flex: '1 1 auto',
                            display: 'block'
                        }}
                    />
                    <RadioButton
                        value="requested"
                        label="Requested events"
                        style={{
                            flex: '1 1 auto',
                            display: 'block'
                        }}
                    />
                </RadioButtonGroup>
                <RaisedButton label="Create event"
                              primary={true}
                              style={{
                                  'flex': '1 0 auto'
                              }}/>
            </div>
        );
    }
}

export default ProfileEvents;
