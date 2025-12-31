function TaskCard({ task, moveTask, deleteTask }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <p>{task.title}</p>
        <button 
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
          title="Delete task"
        >
          ×
        </button>
      </div>

      <div className="task-footer">
        <span className="task-id">ID: {task.id}</span>
        <div className="actions">
          {task.status !== "todo" && (
            <button 
              className="move-btn left"
              onClick={() => moveTask(task.id, "left")}
            >
              ← Back
            </button>
          )}
          
          {task.status !== "done" && (
            <button 
              className="move-btn right"
              onClick={() => moveTask(task.id, "right")}
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;