import TaskCard from "./TaskCard";

function Column({ title, tasks, status, moveTask, deleteTask }) {
  return (
    <div className="column" data-status={status}>
      <div className="column-header">
        <h2>{title}</h2>
        <div className="column-stats">
          <span className="task-count">{tasks.length} tasks</span>
          {tasks.length > 0 && (
            <button 
              className="delete-all-btn"
              onClick={() => {
                if (window.confirm(`Delete all tasks from ${title}?`)) {
                  tasks.forEach(task => deleteTask(task.id));
                }
              }}
              title="Delete all tasks in this column"
            >
              🗑️ All
            </button>
          )}
        </div>
      </div>
      
      <div className="tasks-container">
        {tasks.length > 0 ? (
          <>
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                moveTask={moveTask}
                deleteTask={deleteTask}
              />
            ))}
            <div className="column-summary">
              <span>{tasks.length} task{tasks.length !== 1 ? 's' : ''} in this column</span>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <p>📭 No tasks here yet</p>
            <p>Add a task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Column;