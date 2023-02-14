import React from "react";
import Search from "./Search";

function Header({onItemSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onItemSearch={onItemSearch}/>
    </header>
  );
}

export default Header;
