import React from "react";

const ChannelItem = ({ text }) => {
  return (
    <li className="channels__item">
      <a className="channels__link" href="#">
        {text}
      </a>
    </li>
  );
};

export default ChannelItem;
