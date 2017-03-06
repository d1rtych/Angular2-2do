import { Component, OnInit} from '@angular/core';

import { Todo } from '../Shared/todo';
import { TodoService } from '../Shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'items',
    templateUrl: 'items.component.html',
    styleUrls: ['items.component.css']
})
export class ItemsComponent implements OnInit {
    items: Todo[];

    constructor(private todoService: TodoService) {
        this.items = [];
    }
    ngOnInit() {
        this.todoService.getItems().subscribe(items => this.items = items);
    }

    createItem(title: string) {
        this.todoService.createItem(title).subscribe(item => this.items.push(item));
    }

    deleteItem(item: Todo) {
        this.todoService.deleteItem(item).subscribe(res => {
            let index = this.items.indexOf(item);

            if (index > -1) {
                this.items.splice(index, 1);
            }
        });
    }

    editItem(item: Todo) {

    }

    toggleState(item: Todo) {
        this.todoService.toggleState(item).subscribe(res => item.completed = !item.completed);
    }
}