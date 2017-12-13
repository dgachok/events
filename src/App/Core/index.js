import {connect} from 'react-redux';
import Core from './component';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Core);
