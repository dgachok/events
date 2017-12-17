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

    componentWillReceiveProps() {
        console.log('componentWillUpdate this.props', this.props.error);
        if (this.props.error.isError) {
            this.handleOpen();
        }
    }

    render() {
        const {error} = this.props;
        console.log('this.props error', error);
        const actions = [
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
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <h2>Something going wrong</h2>
                    <p />
                    { Array.isArray(error.errors)
                        ? error.errors.map((error, i) =>
                            (<div key={i}>{(error && error.msg) ? error.msg : ''}</div>))
                        : null
                    }
                </Dialog>
            </div>
        );
    }
}

export default Error;
