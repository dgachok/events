import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from './component';
import {loadUsers} from "./actions";

const mapStateToProps = state => ({
    users: state.users
});
const mapDispatchToProps = (dispatch) => ({
    loadUsers: () => dispatch(loadUsers()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
