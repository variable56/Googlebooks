import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
      <a className="navbar-brand text-light" href="/">
        Google Book Search
      </a>
      <div>
      <a className="text-light m-2 btn btn-success" href="/">
        Search
      </a>
      <a className="text-light m-2 btn btn-success" href="/books">
        Saved
      </a>
      </div>
    </nav>
  );
}

export default Nav;
