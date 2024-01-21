import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header__wrapper">
      <header>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
          >
            <path
              d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
              fill="#1570EF"
            />
            <path
              d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
              fill="#53B1FD"
            />
          </svg>

          <span> ClearLink. </span>
        </div>

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

        <div className="btnContainer">
          <button className="btn1"> Talk to sales </button>
          <button className="btn2"> Sign up for free </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
