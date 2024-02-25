// Header.js

import '../App.css'; 

function Header({foto}) {
  return (
    <header className="header">
        <img src={foto} alt="" />
      <div className="logo">
        <h1>Interstellar</h1>
      </div>
    </header>
  );
}

export default Header;
