import { formatTimestamp } from '../utils/constants';

function NoteCard({ note, onEdit, onDelete }) {
  const { id, title, body, category, createdAt, updatedAt } = note;
  const wasEdited = updatedAt !== createdAt;

  return (
    <article className="card" data-category={category}>
      <div className="card__top">
        <h3 className="card__title">{title}</h3>
        <span className="card__tag">{category}</span>
      </div>

      {body && <p className="card__body">{body}</p>}

      <footer className="card__footer">
        <time className="card__time" dateTime={updatedAt}>
          {wasEdited ? `Edited ${formatTimestamp(updatedAt)}` : `Created ${formatTimestamp(createdAt)}`}
        </time>
        <div className="card__actions">
          <button type="button" className="btn btn--ghost" onClick={() => onEdit(id)}>
            Edit
          </button>
          <button type="button" className="btn btn--danger" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </footer>
    </article>
  );
}

export default NoteCard;
