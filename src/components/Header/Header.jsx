import React from "react";
import "./header.css";
import Btn from "../Btn/Btn";
import Logo from "../Logo/Logo";
function Header() {
  return (
    <div className="header__wrapper">
      <header>
        <Logo />

        <nav>
          <div className="item">
            <span> Products </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="item">
            <span> Solutions </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>


          <div className="item">
            <span> Resources </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="item">
            <span> Pricing </span>
          </div>
        </nav>

        <Btn />
      </header>
    </div>
  );
}

export default Header;
