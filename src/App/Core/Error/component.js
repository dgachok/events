import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Error extends Component {
    handleClose = () => {
        this.props.closeError();
    };

    render() {
        const {error} = this.props;
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
                    open={error.isError}
                    onRequestClose={this.handleClose}
                >
                    <h2 className="red">Something going wrong</h2>
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
