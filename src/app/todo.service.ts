import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    // Aquí puedes inicializar las tareas si lo deseas
    // this.todos.push(new Todo('Tarea 1'));
    // this.todos.push(new Todo('Tarea 2'));
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  // Puedes agregar más métodos para actualizar y gestionar las tareas aquí
}
