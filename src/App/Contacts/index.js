import {connect} from 'react-redux';
import Contacts from './component';
import {sendMessageContacts, closeContacts} from "./actions";

const mapStateToProps = state => ({
    isShow: state.contacts.isShow,
    isSend: state.contacts.isSend
});
const mapDispatchToProps = (dispatch) => ({
    sendMessageContacts: (message) => dispatch(sendMessageContacts(message)),
    closeContacts: () => dispatch(closeContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
