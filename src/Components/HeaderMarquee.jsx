import React from "react";
import Marquee from "react-fast-marquee";

function HeaderMarquee() {
  const content = [
    "We are available in Noida",
    "We are available in Delhi",
    "We are available in Gurugram",
    "We are available in Greater Noida",
    "We are available in Greater Sector 63",
    "We are available in Greater Sector 61",
  ];

  return (
    <div>
      <Marquee className="h-fit">
        {content.map((data, index) => (
          <span key={index} style={{ marginRight: '20px' }}>
            {data}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default HeaderMarquee;
