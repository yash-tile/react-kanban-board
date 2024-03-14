import { TaskInterface } from "./App";

interface TaskCardProps {
  task: TaskInterface;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="taskCard">
      <p className="taskTitle">{task.taskTitle}</p>
    </div>
  );
}

export default TaskCard;
