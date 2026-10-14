const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
];

function FilterBar({ filter, onFilterChange, counts, onClearCompleted }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__tabs" role="group" aria-label="Filter tasks">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`tab ${filter === key ? 'tab--active' : ''}`}
            aria-pressed={filter === key}
            onClick={() => onFilterChange(key)}
          >
            {label} <span className="tab__count">{counts[key]}</span>
          </button>
        ))}
      </div>

      {counts.completed > 0 && (
        <button type="button" className="btn btn--ghost" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
}

export default FilterBar;
