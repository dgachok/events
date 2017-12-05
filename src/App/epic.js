import {combineEpics} from 'redux-observable';
import {LOAD_USERS_ACTION, loadedUsers} from "./actions";
import {ajax} from 'rxjs/observable/dom/ajax';
import {registerEpic} from "./Auth/Registration/epic";
import {loginEpic} from "./Auth/Login/epic";

const usersEpic = action$ =>
    action$.ofType(LOAD_USERS_ACTION)
        .mergeMap(action =>
            ajax.getJSON(`/api/v1/users`)
                .map(loadedUsers)
        );

export const epic = combineEpics(
    usersEpic,
    registerEpic,
    loginEpic
);
