import React, { useState } from "react";

const TodoItemHooks = ({index}) => {
  const [value, setValue] = useState(Math.random());

  return (
    <li>
      {index}: Todo Hooks {value}
    </li>
  );
};

export default TodoItemHooks;
