import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../Shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
    @Input() items: Todo[];
    @Output() 'delete': EventEmitter<string> = new EventEmitter();
    @Output() toggle: EventEmitter<string> = new EventEmitter();

    onDeleteItem(item: string) {
        this.delete.emit(item);
    }

    onToggleState(item: string) {
        this.toggle.emit(item);
    }
}