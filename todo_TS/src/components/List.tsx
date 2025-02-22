import { Todo } from "../types/todo";
import { filterTodos } from "../utils/utils";
import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

interface Props {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const List = ({ todos, onUpdate, onDelete }: Props) => {
  const [search, setSearch] = useState("");
  const filteredTodos = filterTodos(todos, search);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
