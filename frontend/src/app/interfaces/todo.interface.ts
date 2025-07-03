export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface UpdateTodoResponse {
  message: string;
  todo: Todo;
}