// Small date helpers used by the task components.

const today = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

// "2026-10-14" -> Date at local midnight (avoids timezone shifts)
const parseDate = (value) => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
};

export const formatDueDate = (value) =>
  parseDate(value).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const isOverdue = ({ dueDate, completed }) =>
  Boolean(dueDate) && !completed && parseDate(dueDate) < today();
