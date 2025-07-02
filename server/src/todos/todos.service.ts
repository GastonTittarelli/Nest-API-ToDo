import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.interface';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

// const DATA_FILE = path.join(__dirname, 'todos.json');
const DATA_FILE = path.join(process.cwd(), 'data', 'todos.json');

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  // private currentId = 1;

  // Constructor que inicializa el servicio y carga las tareas desde todos.json
  constructor() {
    this.loadFromFile();
  }

  private loadFromFile() {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      this.todos = JSON.parse(raw);
    } else {
      this.todos = [];
    }
  }

  private saveToFile() {
    fs.writeFileSync(DATA_FILE, JSON.stringify(this.todos, null, 2), 'utf-8');
  }


  findAll(): Todo[] {
    return this.todos;
  }

  create(title: string): { message: string; todo: Todo } {

    const exists = this.todos.find(todo => todo.title === title);
    if (exists) {
      throw new ConflictException(`Ya existe una tarea con el título: ${title}`);
    }

    const newTodo: Todo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    this.saveToFile();
    
    return {
      message: 'Se creó correctamente la tarea',
      todo: newTodo
  };
  }

  remove(id: string): { message: string, todo: Todo } {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) {
    throw new NotFoundException(`No se encontró una tarea con id: ${id}`);
    }

    const deleted = this.todos[index]; // 💾 Guardamos la tarea eliminada
    this.todos.splice(index, 1);
    this.saveToFile();

    return {
      message: 'Se eliminó correctamente la tarea',
      todo: deleted
    };
}

update(id: string, changes: Partial<Pick<Todo, 'completed'>>): Todo {
  const index = this.todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    throw new NotFoundException(`No se encontró una tarea con id: ${id}`);
  }

  const todo = this.todos[index];
  if (typeof changes.completed === 'boolean') {
    todo.completed = changes.completed;
    this.saveToFile();
  }

  return todo;
}
}
