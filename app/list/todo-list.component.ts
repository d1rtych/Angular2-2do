import { Component, OnInit} from '@angular/core';

import { Todo } from '../Shared/todo';
import { TodoService } from '../Shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    items: Todo[];

    constructor(private todoService: TodoService) {
        this.items = [];
    }

    /**
     * Method gets items on page initialization
     *
     * @method ngOnInit
     * @returns {void}
     */
    ngOnInit() {
        this.todoService.getItems().then(items => this.items = items);
    }

    /**
     * Method deletes current item
     *
     * @param item {Object}
     * @returns {void}
     */
    deleteItem(item: Todo) {
        this.todoService.deleteItem(item);
    }

    /**
     * Method updates state of current item
     *
     * @param item {Object}
     * @returns {void}
     */
    toggleState(item: Todo) {
        this.todoService.toggleState(item);
    }
}