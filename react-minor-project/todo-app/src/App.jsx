import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import { isOverdue } from './utils/date';

const STORAGE_KEY = 'taskly.tasks';

// Lazy initial state: read saved tasks from Local Storage once on first render.
const loadTasks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState('all');

  // Side effect: persist tasks whenever they change.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, dueDate) => {
    const newTask = { id: Date.now(), title, dueDate, completed: false };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );

  const editTask = (id, updates) =>
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...updates } : task)));

  const deleteTask = (id) => setTasks((prev) => prev.filter((task) => task.id !== id));

  const clearCompleted = () => setTasks((prev) => prev.filter((task) => !task.completed));

  const completedCount = tasks.filter((task) => task.completed).length;
  const counts = {
    all: tasks.length,
    pending: tasks.length - completedCount,
    completed: completedCount,
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const firstOverdue = tasks.find(isOverdue);

  return (
    <div className="app">
      <Header total={counts.all} completed={counts.completed} />

      <main className="app__main">
        <TaskForm onAdd={addTask} />

        {firstOverdue && (
          <p className="notice" role="status">
            Overdue: <strong>{firstOverdue.title}</strong>
          </p>
        )}

        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          counts={counts}
          onClearCompleted={clearCompleted}
        />

        <TaskList
          tasks={visibleTasks}
          filter={filter}
          onToggle={toggleTask}
          onEdit={editTask}
          onDelete={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;
