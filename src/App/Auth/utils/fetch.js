import {ajax} from 'rxjs/observable/dom/ajax';
import store from '../../../index'

export const fetch = (method, url, data) => {
    const headers = {'x-access-token': store.getState().auth.token};
    if(method === 'get') {
        return ajax.getJSON(url, headers);
    } else if(method === 'post') {
        return ajax.post(url, data, headers);
    }
};
