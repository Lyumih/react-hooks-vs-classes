import React, { useEffect, useState } from "react";
import TodoItemHooks from "../components/TodoItemHooks";

const TodoPageHooks = ({counts=1000}) => {
  const [todos, setTodos] = useState(Array(counts).fill(0));
  useEffect(()=>{
    console.log(counts)
    setTodos(Array(counts).fill(0))
  }, [counts])
  return (
    <div>
      <h1>Todo Hooks. Counts: {counts}</h1>

      <ul>
        {todos.map((item, index) => (
          <TodoItemHooks item={item} key={index} index={index}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoPageHooks;
