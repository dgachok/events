import {AUTHENTICATE, authenticateSuccess} from "./actions";
import {ajax} from 'rxjs/observable/dom/ajax';
import {showError, loadUser} from "../../actions";
import {push} from "react-router-redux";
import {Observable} from 'rxjs/Rx';

export const loginEpic = (action$, store) =>
    action$.ofType(AUTHENTICATE)
        .mergeMap(action => ajax.post(`/api/v1/auth/login`, action.payload)
            .flatMap((token) =>
                Observable.merge(
                    Observable.of(authenticateSuccess(token.response)),
                    Observable.of(loadUser()),
                    Observable.of(push('/events'))))
            .catch((err) => Observable.of(showError(err)))
        );
