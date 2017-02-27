import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    private apiUrl = 'api/items';
    items: Todo[] = [];

    constructor(private http: Http) {}

    /**
     * Method gets items from server
     *
     * @method getItems
     * @returns {Promise<Array>}
     */
    getItems(): Promise<Todo[]> {
        return this.http
            .get(this.apiUrl)
            .toPromise()
            .then(res => res.json().data)
            .then(items => this.items = items)
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

        this.http.post(this.apiUrl, item, options)
            .toPromise()
            .then(res => res.json().data)
            .then(item => this.items.push(item))
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

        this.http.delete(url, options)
            .toPromise()
            .then(res => {
                let index = this.items.indexOf(item);

                if (index > -1) {
                    this.items.splice(index, 1);
                }
            })
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

        this.http.put(url, item, options)
            .toPromise()
            .then(res => item.completed = !item.completed)
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
        return Promise.reject(error.message || error);
    }
}