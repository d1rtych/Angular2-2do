import { Component } from '@angular/core';
import { TodoService } from "../Shared/todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {
    title: string = '';

    constructor(private todoService: TodoService) {}

    /**
     * Method creates new item
     *
     * @method onSubmit
     * @returns {void}
     */
    onSubmit() {
        this.todoService.createItem(this.title);
    }
}