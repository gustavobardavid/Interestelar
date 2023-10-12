// Header.js

import '../App.css'; 

function Header({foto}) {
  return (
    <header className="header">
        <img src={foto} alt="" />
      <div className="logo">
        <h1>Interestelar</h1>
      </div>
    <p>Uma viagem para fora da Terra</p>
    </header>
  );
}

export default Header;
