import ProfileEvents from './component';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(ProfileEvents);