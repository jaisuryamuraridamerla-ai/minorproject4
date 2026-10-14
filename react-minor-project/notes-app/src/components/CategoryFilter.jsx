import { CATEGORIES } from '../utils/constants';

const OPTIONS = ['All', ...CATEGORIES];

function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="chips" role="group" aria-label="Filter by category">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={`chip ${selected === option ? 'chip--active' : ''}`}
          aria-pressed={selected === option}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
