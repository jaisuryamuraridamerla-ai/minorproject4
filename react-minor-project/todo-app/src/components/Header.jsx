function Header({ total, completed }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <header className="header">
      <div>
        <h1 className="header__title">Taskly</h1>
        <p className="header__sub">
          {total === 0
            ? 'Nothing planned yet.'
            : `${completed} of ${total} tasks done`}
        </p>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Completion progress"
      >
        <div className="progress__bar" style={{ width: `${percent}%` }} />
      </div>
    </header>
  );
}

export default Header;
