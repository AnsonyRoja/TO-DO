export class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.id = Date.now(); // Genera un id único
    this.text = text;
    this.completed = false; // Inicializa como no completada por defecto
  }
}
