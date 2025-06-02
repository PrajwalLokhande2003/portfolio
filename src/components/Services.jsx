import React from "react";

const Service = () => {
  return (
    <>
      <div className="Services">
        <div class="heading">Services</div>
        <div class="serviceCardDiv">
          <div class="cardOuter">
            <div class="frontend serviceCard">
              <div className="detail">
                <div className="ser-name text-center pt-1 fs-1">Front-end Development</div>
                <p>Work with the latest front-end technologies to create eye-pleasing and responsive user experiences. Combine your ideas and vision with expert development capabilities to deliver goal-driven solutions</p>
              </div>
            </div>
          </div>
          <div class="cardOuter">
            <div class="uidesigner serviceCard">
              <div className="detail text-center pt-1 fs-1">
              <div className="ser-name">UI/UX Design </div>
              <p>Enhance customer engagement by creating intuitive and engaging user interfaces that work consistently across multiple devices. Make readily accessible content to hook your users at one go and increase conversions</p>
              </div>
            </div>
          </div>
          <div class="cardOuter">
            <div class="backend serviceCard">
            <div className="detail text-center pt-1 fs-1">
              <div className="ser-name">Back-end Development </div>
              <p>Craft bespoke, intelligent, and extremely targeted backend solutions for complex web and mobile interfaces to store, process, and manage data from varied sources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Service;