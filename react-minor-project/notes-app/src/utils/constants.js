export const CATEGORIES = ['Personal', 'Work', 'Study', 'Ideas'];

export const formatTimestamp = (isoString) =>
  new Date(isoString).toLocaleString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
