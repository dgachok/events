import {connect} from 'react-redux';
import Footer from './component';
import {showContacts} from "../../Contacts/actions";

const mapStateToProps = state => (state);
const mapDispatchToProps = (dispatch) => ({
    showContacts: () => dispatch(showContacts())
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
