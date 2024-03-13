import "./styles.css";
import Navbar from "./Navbar";
import KanbanBoard from "./KanbanBoard";
import TaskInputGroup from "./TaskInputGroup";
import { useEffect, useState } from "react";

export interface TaskInterface {
  taskId: number;
  taskTitle: string;
  taskStatus: "todo" | "inprogress" | "completed";
}

function App() {
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    if (taskTitle) {
      const newTask: TaskInterface = {
        taskId: Date.now(),
        taskTitle: taskTitle,
        taskStatus: "todo",
      };
      setTaskList([...taskList, newTask]);
    }
  }, [taskTitle]);

  return (
    <>
      <Navbar>
        <TaskInputGroup setTaskTitle={setTaskTitle} />
      </Navbar>
      <KanbanBoard taskList={taskList} />
    </>
  );
}

export default App;
