import { useState } from "react";

function TaskForm({ addTask, totalTasks = 0 }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="✏️ What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">
          <span>➕</span>
          Add Task
        </button>
      </div>
      <div className="form-info">
        {totalTasks > 0 && (
          <small>{totalTasks} task{totalTasks !== 1 ? 's' : ''} total</small>
        )}
      </div>
    </form>
  );
}

export default TaskForm;