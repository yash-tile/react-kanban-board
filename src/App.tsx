import "./styles.css";
import Navbar from "./Navbar";
import KanbanBoard from "./KanbanBoard";
import TaskInputGroup from "./TaskInputGroup";
import { useState } from "react";

function addTask(taskTitle: string) {}

function App() {
  const [taskTitle, setTaskTitle] = useState("");
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
