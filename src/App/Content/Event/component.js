import React, {Component} from 'react';
import AddPhotoIcon from 'material-ui/svg-icons/image/add-a-photo';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ChipInput from 'material-ui-chip-input'
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './styles.css';

class Event extends Component {
    constructor(props) {
        super(props);
        this.autocompleteService = new window.google.maps.places.AutocompleteService();
        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);
        this.state = {
            start_date: minDate,
            end_date: maxDate,
            dataSource: [],
            data: []
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) =>
        this.setState(...this.state, {[event.target.name]: event.target.value});

    onChangeTags = (tags) => {
        this.setState(...this.state, {tags: tags});
    };

    onChangeStartDate = (event, date) => {
        this.setState({
            start_date: date,
        });
    };

    onChangeEndDate = (event, date) => {
        this.setState({
            end_date: date,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log('this.state', this.state);
    };

    updateDatasource(data) {
        if (!data || !data.length) {
            return false;
        }

        this.setState({
            dataSource: data.map(place => place.description),
            data
        });
    }

    onUpdateInput(searchText, dataSource) {
        console.log('searchText', searchText);
        console.log('this.autocompleteService', this.autocompleteService);

        if (!searchText.length || !this.autocompleteService) {
            return false;
        }

        let request = {
            input: searchText,
            radius: 0,
            types: [],
        };

        this.autocompleteService.getPlacePredictions(request, data => {
            console.log('request', request);
            console.log('data', data);
            this.updateDatasource(data)
        });
    }

    render() {
        const MapWithAMarker = withGoogleMap(props =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                />
            </GoogleMap>
        );

        return (
            <div>
                <div className="event__title">
                    <strong>Create event</strong>
                </div>
                <div className="event__upload">
                    <div><AddPhotoIcon /></div>
                    <div>*image is required</div>
                </div>
                <div className="event__information">
                    <div className="event__fields">
                        <TextField
                            hintText="Title"
                            floatingLabelText="Title"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            fullWidth={true}
                        />
                        <DatePicker
                            onChange={this.onChangeStartDate}
                            floatingLabelText="Start date"
                            defaultDate={this.state.minDate}
                        />
                        <DatePicker
                            onChange={this.onChangeEndDate}
                            floatingLabelText="End date"
                            defaultDate={this.state.maxDate}
                        />
                        <ChipInput
                            fullWidth={true}
                            hintText="Press enter after typing"
                            floatingLabelText="Tags"
                            onChange={this.onChangeTags}
                        />
                        <AutoComplete
                            openOnFocus={true}
                            hintText="Type address"
                            floatingLabelText="Address"
                            fullWidth={true}
                            onUpdateInput={this.onUpdateInput}
                            dataSource={this.state.dataSource}
                        />
                        <TextField
                            hintText="Description"
                            floatingLabelText="Please describe the event"
                            onChange={this.handleChangeMessage}
                            multiLine={true}
                            rows={2}
                            fullWidth={true}
                        />
                    </div>
                    <div className="event__map">
                        <div className="event__map-title">*choose location</div>
                        <div>
                            <MapWithAMarker
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div>
                </div>
                <div className="event__button">
                    <RaisedButton label="Create event"
                                  primary={true}
                                  onClick={this.onSubmit}
                                  className="m-t-sm"
                                  type="submit"/>
                </div>
            </div>
        )
    }
}

export default Event;