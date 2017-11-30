import {combineEpics} from 'redux-observable';
import {LOAD_USERS_ACTION, loadedUsers} from "./actions";
import {ajax} from 'rxjs/observable/dom/ajax';
import {registerEpic} from "./Auth/Registration/epic";

const usersEpic = action$ =>
    action$.ofType(LOAD_USERS_ACTION)
        .mergeMap(action =>
            ajax.getJSON(`/users`)
                .map(loadedUsers)
        );

export const epic = combineEpics(
    usersEpic,
    registerEpic
);
