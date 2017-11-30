import {AUTHENTICATE} from "./actions";
import {ajax} from 'rxjs/observable/dom/ajax';
import {showError} from "../../actions";
import {Observable} from 'rxjs/Observable';

export const loginEpic = action$ =>
    action$.ofType(AUTHENTICATE)
        .mergeMap(action => ajax.post(`/auth/login`, action.payload)
            .catch((err) => Observable.of(showError(err)))
        );
