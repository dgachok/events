import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from './component';

const mapStateToProps = state => ({
    user: state.user
});

export default withRouter(connect(mapStateToProps)(App));
