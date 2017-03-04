import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    private apiUrl = 'api/items';

    constructor(private http: Http) {}

    /**
     * Method gets items from server
     *
     * @method getItems
     * @returns {Promise<Array>}
     */
    getItems(): Observable<Todo[]> {
        return this.http
            .get(this.apiUrl)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    /**
     * Method sends request to server
     * for creating new item
     *
     * @method createItem
     * @param title {String} - title of item
     * @returns {void}
     */
    createItem(title: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let item = new Todo(title);

        return this.http.post(this.apiUrl, item, options)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    /**
     * Method sends request to server
     * for deleting current item
     *
     * @method deleteItem
     * @param item {Object} - current object
     * @returns {void}
     */
    deleteItem(item: Todo) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${item.id}`;

        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    /**
     * Method sends request to server
     * for updating current state of item
     *
     * @method toggleState
     * @param item {Object} - current object
     * @returns {void}
     */
    toggleState(item: Todo) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${item.id}`;

        return this.http.put(url, item, options)
            .catch(this.handleError);
    }

    /**
     * Method throws error
     *
     * @method handleError
     * @param error {Object} - error object
     * @returns {Promise<never>}
     */
    private handleError(error: any) {
        console.error('An error has occurred', error);
        return Observable.throw(error.message || error);
    }
}