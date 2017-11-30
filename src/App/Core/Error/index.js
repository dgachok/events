import {connect} from 'react-redux';
import App from './component';
import {closeError} from "../../actions";

const mapStateToProps = state => ({
    error: state.error
});
const mapDispatchToProps = (dispatch) => ({
    closeError: () => dispatch(closeError()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
