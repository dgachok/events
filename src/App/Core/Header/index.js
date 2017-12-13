import {connect} from 'react-redux';
import Header from './component';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
});
export default connect(mapStateToProps)(Header);
