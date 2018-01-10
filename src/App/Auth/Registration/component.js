import React, {Component} from 'react';
import './styles.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ChipInput from 'material-ui-chip-input'
import AvatarCropper from "react-avatar-cropper";
import ReactDom from "react-dom";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) =>
        this.setState(...this.state, {[event.target.name]: event.target.value});

    onChangeTags = (tags) => {
        this.setState(...this.state, {tags: tags});
    };

    onCrop = (image) => {
        console.log('image', image);
        this.setState(...this.state, {image: image});
    };

    onRequestHide = (event) => {
        console.log('event', event);
        this.setState(...this.state, {croppedImage: this.state.croppedImage, cropperOpen: false});
    };

    handleFileChange = (dataURI) => {
    this.setState(...this.state, {croppedImage: this.state.croppedImage, cropperOpen: true, image: dataURI});
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log('thihs.state', this.state);
        this.props.registerUser(this.state);
    };

    render() {
        return (
            <div className="registration__container">
                <div className="registration__side"></div>
                <div className="registration__form">
                    <h1>Sign up</h1>
                    <form>
                        <TextField
                            hintText="Email"
                            floatingLabelText="Email"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            fullWidth={true}
                        />
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="Password"
                            onChange={this.onChange}
                            name="password"
                            fullWidth={true}
                        />
                        <TextField
                            hintText="Firstname"
                            floatingLabelText="Firstname"
                            type="text"
                            onChange={this.onChange}
                            name="firstName"
                            fullWidth={true}
                        />
                        <TextField
                            hintText="Lastname"
                            floatingLabelText="Lastname"
                            type="text"
                            onChange={this.onChange}
                            name="lastName"
                            fullWidth={true}
                        />
                        <ChipInput
                            fullWidth={true}
                            hintText="Press enter after typing"
                            floatingLabelText="Tags"
                            onChange={this.onChangeTags}
                        />
                        <AvatarCropper
                            onCrop={this.onCrop}
                            image={this.state.image}
                            width={400}
                            height={400}
                            cropperOpen={this.state.cropperOpen}
                            onRequestHide={this.onRequestHide}/>
                        <FileUpload handleFileChange={this.handleFileChange} />
                        <p />
                        <RaisedButton label="Register"
                                      onClick={this.onSubmit}
                                      className="m-t-sm"
                                      type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

const FileUpload = React.createClass({

    handleFile: function(e) {
        const reader = new FileReader();
        const file = e.target.files[0];

        if (!file) return;

        reader.onload = function(img) {
            ReactDom.findDOMNode(this.refs.in).value = '';
            this.props.handleFileChange(img.target.result);
        }.bind(this);
        reader.readAsDataURL(file);
    },

    render: function() {
        return (
            <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
        );
    }
});


export default Registration;
