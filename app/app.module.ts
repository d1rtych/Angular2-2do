import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Shared/data.service';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { TodoFormComponent } from './items/form/todo-form.component';
import { TodoListComponent } from './items/list/todo-list.component';
import { TodoItemComponent } from './items/item/todo-item.component';
import { TodoService } from './Shared/todo.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})

export class AppModule {}