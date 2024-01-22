import React from "react";
import "./style.css";
import { revImg1, revImg2, revImg3, revImg4, revImg5, shopify, shopifyManager } from "../../assets";
import Star from "../hero/Star";
import { revImages } from "../../constants";

function ShopifyReview() {
  return (
    <div className="shopifyReviewWrapper">
      <div className="first">
        <img src={shopify} alt="shopify" className="shopifyImage" />
        <div className="revStars">
        <Star />
        </div>
        <p className="desc">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>

        <div className="userInfo">
          <div className="first">
            <img src={shopifyManager} alt="user" />
            <div className="info">
              <h5>Sarah Thompson</h5>
              <span>Project Manager, Shopify</span>
            </div>
          </div>

          <div className="arrows">
            <div className="arrowRright">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="#175CD3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="arrowLeft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#175CD3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="second">
        <div className="firstImgWrap">
          <img src={revImg1} alt="" />
          <img src={revImg2} alt="" />
        </div>
        <div className="secondImgWrap">
          <img src={revImg3} alt="" />
          <img src={revImg4} alt="" />
          <img src={revImg5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ShopifyReview;
