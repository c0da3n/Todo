import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useState } from "react";
import { Todo } from "./types/todo";
import { getCurrentTimestamp } from "./utils/utils";

const mockData: Todo[] = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: getCurrentTimestamp(),
  },
  { id: 1, isDone: true, content: "빨래하기", date: getCurrentTimestamp() },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: getCurrentTimestamp(),
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(mockData);
  const idRef = useRef<number>(3);

  const onCreate = (content: string) => {
    setTodos((prev) => [
      {
        id: idRef.current++,
        isDone: false,
        content,
        date: getCurrentTimestamp(),
      },
      ...prev,
    ]);
  };

  const onUpdate = (targetId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
