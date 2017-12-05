import {AUTHENTICATE} from "./actions";
import {ajax} from 'rxjs/observable/dom/ajax';
import {push} from 'react-router-redux';
import {showError} from "../../actions";
import {Observable} from 'rxjs/Observable';

export const loginEpic = (action$, store) =>
    action$.ofType(AUTHENTICATE)
        .mergeMap(action => ajax.post(`/api/v1/auth`, action.payload)
            .map(() => push('/events'))
            .catch((err) => Observable.of(showError(err)))
        );
