import React, {Component} from 'react';
import './styles.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const items = [
    <MenuItem key={1} value={1} primaryText="I want to improve application" />,
    <MenuItem key={2} value={2} primaryText="Another reason" />
];

class Contacts extends Component {
    state = {
        reason: null,
        message: ''
    };

    handleChangeReason = (event, index, value) => this.setState({reason: value});
    handleChangeMessage = (event, index, value) =>  this.setState({message: event.target.value});

    handleClose = () => {
        this.props.closeContacts();
    };

    sendMessageContacts = () => {
        this.props.sendMessageContacts(this.state);
    };

    render() {
        const {isShow} = this.props;
        const actions = [
            <FlatButton
                label="Send"
                primary={true}
                onClick={this.sendMessageContacts}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={true}
                    open={isShow}
                    onRequestClose={this.handleClose}
                >
                    <h2>Contact us</h2>
                    <SelectField
                        value={this.state.reason}
                        onChange={this.handleChangeReason}
                        floatingLabelText="Please specify a reason"
                        autoWidth={true}
                    >
                        {items}
                    </SelectField>
                    <TextField
                        hintText="Message"
                        value={this.state.message}
                        floatingLabelText="Please describe the request"
                        onChange={this.handleChangeMessage}
                        multiLine={true}
                        rows={3}
                        fullWidth={true}
                    />
                </Dialog>
            </div>
        );
    }
}

export default Contacts;
