export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}