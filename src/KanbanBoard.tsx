import { TaskInterface } from "./App";

interface KanbanBoardProps {
  taskList: TaskInterface[];
}

interface KanbanLaneProps {
  laneTitle: string;
  laneItems: TaskInterface[];
}

function KanbanLane({ laneTitle, laneItems }: KanbanLaneProps) {
  return (
    <div className="kanbanLane">
      <h3 className="kanbanLaneTitle">{laneTitle}</h3>
      <div className="kanbanLaneContent"></div>
    </div>
  );
}

function classifyTaskList(taskList: TaskInterface[]) {
  let todoList: TaskInterface[] = [];
  let inprogressList: TaskInterface[] = [];
  let completedList: TaskInterface[] = [];

  taskList.forEach((task) => {
    if (task.taskStatus === "todo") {
      todoList.push(task);
    } else if (task.taskStatus === "inprogress") {
      inprogressList.push(task);
    } else if (task.taskStatus === "completed") {
      completedList.push(task);
    }
  });

  return { todoList, inprogressList, completedList };
}

function KanbanBoard({ taskList }: KanbanBoardProps) {
  console.log(classifyTaskList(taskList));
  const { todoList, inprogressList, completedList } =
    classifyTaskList(taskList);
  return (
    <div className="kanbanBoard container d-flex justify-content-around mt-2">
      <KanbanLane laneTitle="Todo" laneItems={todoList} />
      <KanbanLane laneTitle="In Progress" laneItems={inprogressList} />
      <KanbanLane laneTitle="Done" laneItems={completedList} />
    </div>
  );
}

export default KanbanBoard;
