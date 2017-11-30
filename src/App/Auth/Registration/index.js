import {connect} from 'react-redux';
import Registration from './component';
import {registerUser} from "./actions";

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => ({
    registerUser: (user) => dispatch(registerUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
