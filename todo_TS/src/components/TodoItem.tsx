import { Todo } from "../types/todo";
import "./TodoItem.css";

interface Props extends Todo {
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }: Props) => {
  return (
    <div className="TodoItem">
      <input onChange={() => onUpdate(id)} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
