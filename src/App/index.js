import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from './component';
import {initialize, initialized} from "./actions";

const mapStateToProps = state => ({
    isInitApp: state.isInitApp,
    isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = (dispatch) => ({
    initialize: (token) => dispatch(initialize(token)),
    initialized: (token) => dispatch(initialized()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
