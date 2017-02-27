import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../Shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
    @Input() item: Todo;
    @Output() 'delete' = new EventEmitter();
    @Output() toggle = new EventEmitter();

    /**
     * Method triggers event of
     * changing item's state
     *
     * @method onToggle
     * @returns {void}
     */
    onToggle() {
        this.toggle.emit(this.item);
    }

    /**
     * Method triggers event of
     * deleting item
     *
     * @method onDelete
     * @returns {void}
     */
    onDelete() {
        this.delete.emit(this.item);
    }
}