import {combineEpics} from 'redux-observable';
import {showError, LOAD_USER_ACTION, loadedUser, loadUser, APP_INITIALIZE_ACTION, initialized} from "./actions";
import {registerEpic} from "./Auth/Registration/epic";
import {loginEpic} from "./Auth/Login/epic";
import {Observable} from 'rxjs/Rx';
import {authenticateSuccess} from "./Auth/Login/actions";
import {fetch} from "./Auth/utils/fetch";
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import {contactsEpic} from "./Contacts/epic";

const userEpic = action$ =>
    action$.ofType(LOAD_USER_ACTION)
        .mergeMap(action =>
            fetch('get', '/api/v1/users/current-user')
                .map((user) => loadedUser(user))
                .catch((err) => Observable.of(showError(err)))
        );

const initEpic = action$ =>
    action$.ofType(APP_INITIALIZE_ACTION)
        .flatMap((action) => {
                return Observable.merge(
                    Observable.of(loadUser()),
                    Observable.of(authenticateSuccess(action.payload)),
                    Observable.of(initialized()))
            }
        );

export const epic = combineEpics(
    userEpic,
    registerEpic,
    loginEpic,
    initEpic,
    contactsEpic
);
