import Profile from './component';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Profile);