import Todo from "./Todo";
import { useState } from "react";
const List = () => {
  const [value, setValue] = useState("");
  const [List, setList] = useState([]);

  function handleOnClick() {
    setList((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }
  return (
    <div
      className="List"
      style={{
        //  border: "2px solid black",
       textAlign: "center", padding: 20 ,}}
    >
      <input className="input" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="button" onClick={() => handleOnClick()}>
        create List
      </button>

      {List.map((list, index) => (
        <Todo list={list} key={index} />
      ))}
    </div>
  );
};

export default List;
