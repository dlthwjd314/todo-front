export interface Todo {
  id: number;
  description: string;
  checked: boolean;
}

export interface ChangeTodo {
  id?: number;
  description?: string;
  checked?: boolean;
}
