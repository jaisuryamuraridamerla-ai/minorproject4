import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    onAdd(trimmed, dueDate);
    setTitle('');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="input task-form__title"
        type="text"
        placeholder="What needs doing?"
        aria-label="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input task-form__date"
        type="date"
        aria-label="Due date (optional)"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="btn btn--primary" type="submit" disabled={!title.trim()}>
        Add task
      </button>
    </form>
  );
}

export default TaskForm;
