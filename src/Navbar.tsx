import { useState } from "react";
import { MdAddCard } from "react-icons/md";

function TaskInputGroup() {
  let [taskTitle, setTaskTitle] = useState("");

  const handleAddClick = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className="input-group container mt-2">
      <input
        type="text"
        autoFocus
        placeholder="Enter Task..."
        className="input-group-item"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        type="button"
        className="input-group-item"
        onClick={handleAddClick}
      >
        <MdAddCard />
      </button>
    </div>
  );
}

function Navbar() {
  return <TaskInputGroup />;
}

export default Navbar;
