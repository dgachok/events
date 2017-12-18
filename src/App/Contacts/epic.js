import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs/Rx';
import {SEND_MESSAGE_CONTACTS_ACTION, sendMessageSuccessContacts} from "./actions";
import {showError} from "../actions";

export const contactsEpic = (action$, store) =>
    action$.ofType(SEND_MESSAGE_CONTACTS_ACTION)
        .mergeMap(action => ajax.post(`/api/v1/contacts`, action.payload)
            .map(sendMessageSuccessContacts)
            .catch((err) => Observable.of(showError(err)))
        );