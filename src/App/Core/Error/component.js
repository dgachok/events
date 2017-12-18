import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

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
                    className="error"
                    actions={actions}
                    modal={false}
                    open={error.isError}
                    onRequestClose={this.handleClose}
                >
                    <h2 className="red">Something going wrong</h2>
                    <p />
                    <ul>
                        { Array.isArray(error.errors)
                        ? error.errors.map((error, i) =>
                            (<li key={i}>{(error && error.msg) ? error.msg : ''}</li>))
                        : null
                    }
                    </ul>
                </Dialog>
            </div>
        );
    }
}

export default Error;
