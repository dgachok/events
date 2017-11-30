import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Error extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.closeError();
    };

    componentWillUpdate() {
        if (this.props.error) {
            this.handleOpen();
        }
    }

    render() {
        const {error} = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Discard"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <h2>Error</h2>
                    <p />
                    {error}
                </Dialog>
            </div>
        );
    }
}

export default Error;
