import React from "react";
import "./mockup.css";
import { mockupImg } from "../../assets";
import Btn from "../Btn/Btn";

function Mockup() {
  return (
    <div className="Wrapper">
        
      <div className="first">
        <h2> Ready to clear the path to perfect communication? </h2>

        <div className="infoDiv">

          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>30 days free trial</span>
          </div>
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>30 days free trial</span>
          </div>

          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>30 days free trial</span>
          </div>

          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                stroke="#175CD3"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>30 days free trial</span>
          </div>  
        </div>

        <div className="btnWrap">
       <Btn />
        </div>
      </div>

      <div className="second">
        <img src={mockupImg} alt="" />
      </div>
    </div>
  );
}

export default Mockup;
