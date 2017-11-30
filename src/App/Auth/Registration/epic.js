import {REGISTER_USER} from "./actions";
import {ajax} from 'rxjs/observable/dom/ajax';
import {push} from 'react-router-redux';
import {showError} from "../../actions";
import {Observable} from 'rxjs/Observable';

export const registerEpic = action$ =>
    action$.ofType(REGISTER_USER)
        .mergeMap(action => ajax.post(`/users`, action.payload)
            .map(() => push('/'))
            .catch((err) => Observable.of(showError(err.message)))
        );
