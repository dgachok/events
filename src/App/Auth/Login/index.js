import Login from './component';
import {connect} from 'react-redux';
import {authenticate} from "./actions";

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => ({
    authenticate: (credentials) => dispatch(authenticate(credentials)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);