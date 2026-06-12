import { useEffect, useState } from "react";
import { createTodo,getTodos,updateTodo,deleteTodo,} from "../services/todoService";
import "./Todo.css";

function Todo() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const loadTodos =
    async () => {
      try {
        const data =
          await getTodos(filter);

        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    loadTodos();
  }, [filter]);

  const handleCreate =
    async (e) => {
      e.preventDefault();
      if (!title.trim()) return;
      try {
        await createTodo(title);
        setTitle("");
        loadTodos();
      } catch (error) {
        console.error(error);
      }
    };

  const toggleComplete =
    async (todo) => {
      try {
        await updateTodo(
          todo._id,{completed: !todo.completed}
        );
        loadTodos();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {
        await deleteTodo(id);
        loadTodos();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1 className="todo-title">
          Todo List
        </h1>
        <p className="todo-subtitle">
          Manage your study tasks and stay productive.
        </p>
      </div>
      <form onSubmit={handleCreate} className="todo-form" >
        <input type="text" placeholder="Add a new task..." value={title} onChange={(e) => setTitle(e.target.value)} className="todo-input" />
        <button className="todo-add-btn">
          Add Task
        </button>
      </form>
      <div className="todo-filters">
        <button onClick={() => setFilter("all")} className={`todo-filter-btn ${filter === "all" ? "todo-filter-active" : ""}`} >
          All
        </button>
        <button onClick={() => setFilter("pending")}className={`todo-filter-btn ${filter === "pending" ? "todo-filter-active" : ""}`}>
          Pending
        </button>
        <button onClick={() => setFilter("completed")} className={`todo-filter-btn ${filter === "completed" ? "todo-filter-active" : "" }`}>
          Completed
        </button>
      </div>
      {todos.length > 0 ? (
        <div className="todo-list">
          {todos.map(
            (todo) => (
              <div key={todo._id} className="todo-card">
                <div>
                  <p className={`todo-task ${todo.completed ? "todo-completed" : "todo-pending"}`}>
                    {todo.title}
                  </p>
                </div>
                <div className="todo-actions">
                  <button onClick={() => toggleComplete(todo)} className={`todo-complete-btn ${todo.completed ? "todo-complete-active" : "" }`}>
                    ✓
                  </button>
                  <button onClick={() => handleDelete(todo._id)} className="todo-delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="todo-empty">
          <div className="todo-empty-icon">
            ✅
          </div>
          <h2 className="todo-empty-title">
            No Tasks Found
          </h2>
          <p className="todo-empty-text">
            Add your first task to get started.
          </p>
        </div>
      )}
    </div>
  );
}

export default Todo;