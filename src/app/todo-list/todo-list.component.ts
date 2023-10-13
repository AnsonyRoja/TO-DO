import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {


  todos: Todo[] = [];
  newTodoText: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }


  addTodo() {
    if (this.newTodoText) {
      const newTodo = new Todo(this.newTodoText);
      this.todoService.addTodo(newTodo);
      this.newTodoText = ''; // Limpia el campo de entrada después de agregar la tarea
    }
  }


}