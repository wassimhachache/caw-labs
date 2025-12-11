import { useState } from "react";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design homepage layout", status: "todo" },
    { id: 2, title: "Implement user authentication", status: "inprogress" },
    { id: 3, title: "Write unit tests", status: "done" },
    { id: 4, title: "Fix mobile responsive issues", status: "todo" },
    { id: 5, title: "Optimize database queries", status: "inprogress" },
    { id: 6, title: "Document API endpoints", status: "done" },
  ]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: "todo",
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const moveTask = (taskId, direction) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const statusOrder = ["todo", "inprogress", "done"];
        const currentIndex = statusOrder.indexOf(task.status);
        
        if (direction === "left" && currentIndex > 0) {
          return { ...task, status: statusOrder[currentIndex - 1] };
        } else if (direction === "right" && currentIndex < 2) {
          return { ...task, status: statusOrder[currentIndex + 1] };
        }
      }
      return task;
    }));
  };

  const deleteAllTasks = () => {
    if (window.confirm("Are you sure you want to delete ALL tasks?")) {
      setTasks([]);
    }
  };

  const columns = [
    { 
      title: "To Do", 
      status: "todo",
      tasks: tasks.filter(task => task.status === "todo")
    },
    { 
      title: "In Progress", 
      status: "inprogress",
      tasks: tasks.filter(task => task.status === "inprogress")
    },
    { 
      title: "Done", 
      status: "done",
      tasks: tasks.filter(task => task.status === "done")
    }
  ];

  const totalTasks = tasks.length;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          <span>🚀</span>
          TaskFlow Kanban Board
          <span>🚀</span>
        </h1>
        <p>Drag-free task management • {totalTasks} total tasks</p>
        <div className="header-actions">
          <button 
            className="clear-all-btn"
            onClick={deleteAllTasks}
            disabled={totalTasks === 0}
          >
            🗑️ Clear All Tasks
          </button>
        </div>
      </header>

      <div className="task-form-container">
        <TaskForm addTask={addTask} />
      </div>

      <div className="kanban-board">
        {columns.map((column) => (
          <Column
            key={column.status}
            title={column.title}
            tasks={column.tasks}
            status={column.status}
            moveTask={moveTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>

      <footer className="app-footer">
        <p>Total Tasks: {totalTasks} | 
          To Do: {columns[0].tasks.length} | 
          In Progress: {columns[1].tasks.length} | 
          Done: {columns[2].tasks.length}
        </p>
      </footer>
    </div>
  );
}

export default App;