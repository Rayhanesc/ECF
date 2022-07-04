const Task = ({ todo }) => {
  return (
    <div
     
      style={{ textAlign: "center", padding: 20 }}
    >
      {todo.title}
      <input className="input" textAlign="left" type="checkbox" id="horns" name="horns" />
    </div>
  );
};
export default Task;
