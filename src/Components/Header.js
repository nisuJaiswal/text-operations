import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <div>
      <nav>
        <a className='MainHeading'>{props.title}</a>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
