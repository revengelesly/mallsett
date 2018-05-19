import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class HttpService {
    //Get request HTTP service
    static get(url, headers={}) {
        // console.log(headers)
        return Observable.ajax({
            url,
            method: 'GET',
            responseType: 'json',
            crossDomain: true,
            async: true,
            headers,
            createXHR: () => new XMLHttpRequest()
        });
    }
    //Post request HTTP service
    static post(url, body, headers = {"Content-Type": "application/json"}) {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
}