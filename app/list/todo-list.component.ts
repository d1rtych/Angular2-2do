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

    ngOnInit() {
        this.todoService.getItems().then(items => this.items = items);
    }

    deleteItem(item: Todo) {
        this.todoService.deleteItem(item);
    }

    toggleState(item: Todo) {
        this.todoService.toggleState(item);
    }
}