import "./styles.css";
import Navbar from "./Navbar";
import KanbanBoard from "./KanbanBoard";
import TaskInputGroup from "./TaskInputGroup";
import { useState } from "react";

interface Task {
  taskId: number;
  taskTitle: string;
  taskStatus: "todo" | "inprogress" | "completed";
}

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  if (taskTitle) {
    const newTask = {
      taskId: Date.now(),
      taskTitle: taskTitle,
      taskStatus: "",
    };
    // setTaskList([...taskList, newTask]);
  }
  return (
    <>
      <Navbar>
        <TaskInputGroup setTaskTitle={setTaskTitle} />
      </Navbar>
      <KanbanBoard />
    </>
  );
}

export default App;
