import { Todo } from "../types/todo";

export const getCurrentTimestamp = (): number => new Date().getTime();

export const filterTodos = (todos: Todo[], search: string): Todo[] => {
  if (!search.trim()) return todos;
  return todos.filter((todo) =>
    todo.content.toLowerCase().includes(search.toLowerCase())
  );
};
