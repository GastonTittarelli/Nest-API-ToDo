import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,
            MatIconModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule,
            MatListModule,
            FormsModule
          ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  tasks: Todo[] = [];
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.todoService.getTodos().subscribe(todos => {
      this.tasks = todos;
    });
  }

  capitalizeWords(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

  addTask() {
    const trimmed = this.newTask.trim();
  if (trimmed) {
    const capitalized = this.capitalizeWords(trimmed);
    this.todoService.addTodo(capitalized).subscribe(newTodo => {
      this.tasks.push(newTodo);
      this.newTask = '';
    });
  }
  }

  deleteTask(index: number) {
    const task = this.tasks[index];
    this.todoService.deleteTodo(task.id).subscribe(() => {
      this.tasks.splice(index, 1);
    });
  }
}