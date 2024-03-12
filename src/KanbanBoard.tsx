interface KanbanLaneProps {
  laneTitle: string;
}

function KanbanLane({ laneTitle }: KanbanLaneProps) {
  return (
    <div className="kanbanLane">
      <h3 className="kanbanLaneTitle">{laneTitle}</h3>
      <div className="kanbanLaneContent"></div>
    </div>
  );
}

function KanbanBoard() {
  return (
    <div className="kanbanBoard container d-flex justify-content-around mt-2">
      <KanbanLane laneTitle="Todo" />
      <KanbanLane laneTitle="In Progress" />
      <KanbanLane laneTitle="Done" />
    </div>
  );
}

export default KanbanBoard;
