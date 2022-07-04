import Task from "./Task";
import { useState } from "react";

const Todo = ({ list }) => {
  const [value, setValue] = useState("");
  const [Todo, setTodo] = useState([]);

  function handleOnClick() {
    setTodo((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }
  return (
    <div>
      {list.title}

      <div
        className="Todo"
        style={{ textAlign: "center", padding: 20 ,border: "2px solid white",}}
      >
        <input className="input" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="button" onClick={() => handleOnClick()}>
          create todo
        </button>

        {Todo.map((todo, index) => (
          <Task todo={todo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
