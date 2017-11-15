import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs';


const userEpic = () => {
    //noinspection JSUnresolvedFunction
    return Observable.of(null);
};

export const epic = combineEpics(
    userEpic
);
