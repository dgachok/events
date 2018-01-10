import Notifications from './component';
import {connect} from 'react-redux';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Notifications);