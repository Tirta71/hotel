import React from "react";
import { useNavigate } from "react-router-dom";

export default function FormBook() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/detail-book");
  };

  return (
    <>
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <div className="field field-date field-separator field-checkin">
            <label>Check-in</label>
            <input
              type="hidden"
              name="checkin"
              id="checkin"
              value="2018-11-13"
            />
            <span className="field-value">
              <span className="short">13 Nov 2023</span>
              <span className="long">13 November 2023</span>
            </span>
            <a href="#" className="mdi mdi-calendar-today"></a>
          </div>
          <div className="field field-date field-separator field-checkout">
            <label>Check-out</label>
            <input
              type="hidden"
              name="checkout"
              id="checkout"
              value="2018-11-21"
            />
            <span className="field-value">
              <span className="short">21 Nov 2023</span>
              <span className="long">21 November 2023</span>
            </span>
            <a href="#" className="mdi mdi-calendar"></a>
          </div>
          <div className="field field-number field-separator field-adults">
            <label>Adults</label>
            <input type="hidden" name="adults" id="adults" value="2" />
            <span className="field-value">2</span>
            <a href="#" className="mdi"></a>
            <div className="dropdown">
              <ul className="values">
                <li>
                  <a href="#" data-value="0">
                    0
                  </a>
                </li>
                <li>
                  <a href="#" data-value="1">
                    1
                  </a>
                </li>
                <li className="selected">
                  <a href="#" data-value="2">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" data-value="3">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" data-value="4">
                    4
                  </a>
                </li>
                <li>
                  <a href="#" data-value="5">
                    5
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="field field-number field-children">
            <label>Children</label>
            <input type="hidden" name="children" id="children" value="0" />
            <span className="field-value">0</span>
            <a href="#" className="mdi"></a>
            <div className="dropdown">
              <ul className="values">
                <li className="selected">
                  <a href="#" data-value="0">
                    0
                  </a>
                </li>
                <li>
                  <a href="#" data-value="1">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" data-value="2">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" data-value="3">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" data-value="4">
                    4
                  </a>
                </li>
                <li>
                  <a href="#" data-value="5">
                    5
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
          <button type="submit" className="button-color">
            Book Now
          </button>
        </form>
      </div>
    </>
  );
}
