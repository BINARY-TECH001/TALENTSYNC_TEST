import "./faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function Faq() {
  return (
    <div className="faq__wrapper">
      <div className="first">
        <span> Support </span>
        <h1> FAQs </h1>
        <p>
          Everything you need to know about the product <br /> and billing.
          Can’t find the answer you’re looking for? <br /> Please chat to our
          friendly team.
        </p>
      </div>

      <div className="second">
        <div className="open">
          <div className="iconDiv">
            <h2>
              How many participants can join a ClearLink video conference?
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span className="openText">
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </span>
        </div>

        <div className="closeDiv">
          <p>Can I use ClearLink on multiple devices?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="closeDiv">
          <p>Is ClearLink compatible with other video conferencing platforms?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="closeDiv">
          <p>How does ClearLink ensure the security of my video conferences?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="closeDiv">
          <p>Do I need to download any software to use ClearLink?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="closeDiv">
          <p>What kind of customer support does ClearLink provide?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        
      </div>
    </div>
  );
}

export default Faq;
