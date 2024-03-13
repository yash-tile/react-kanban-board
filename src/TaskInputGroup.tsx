import { MdAddCard } from "react-icons/md";
import { useState } from "react";

interface TaskInputGroupProps {
  setTaskTitle: (taskTitle: string) => void;
}

function TaskInputGroup({ setTaskTitle }: TaskInputGroupProps) {
  let [inputTask, setInputTask] = useState("");

  const handleAddClick = () => {
    inputTask = inputTask.trim();
    if (inputTask !== "") {
      setTaskTitle(inputTask);
      setInputTask("");
    }
  };

  return (
    <div className="input-group container mt-2">
      <input
        type="text"
        autoFocus
        placeholder="Enter Task..."
        className="input-group-item"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
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

export default TaskInputGroup;
