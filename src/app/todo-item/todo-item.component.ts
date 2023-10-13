import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor() {

    this.todo = new Todo("");

  }

  toggleCompletion() {
    this.todo.completed = !this.todo.completed;
  }


}
