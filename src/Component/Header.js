import React from "react";

function Header({ onDarkModeClick }) {
  return <button onClick={onDarkModeClick}>Toggle Mode</button>;
}

export default Header;