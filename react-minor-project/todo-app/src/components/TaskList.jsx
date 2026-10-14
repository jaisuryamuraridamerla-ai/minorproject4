import TaskItem from './TaskItem';

const EMPTY_MESSAGES = {
  all: 'No tasks yet. Add your first one above.',
  pending: 'Nothing pending. Nice work.',
  completed: 'No completed tasks yet.',
};

function TaskList({ tasks, filter, onToggle, onEdit, onDelete }) {
  // Conditional rendering: empty state vs. list
  if (tasks.length === 0) {
    return <p className="empty">{EMPTY_MESSAGES[filter]}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
