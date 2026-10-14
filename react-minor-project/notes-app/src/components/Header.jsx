function Header({ count }) {
  return (
    <header className="header">
      <h1 className="header__title">Jotter</h1>
      <p className="header__sub">
        {count === 0 ? 'Your notes will show up here.' : `${count} ${count === 1 ? 'note' : 'notes'} saved`}
      </p>
    </header>
  );
}

export default Header;
