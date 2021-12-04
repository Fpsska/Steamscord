import React from "react";
import { Link } from "react-router-dom";

const ChannelItem = ({ text }) => {
  return (
    <li className="channels__item">
      <Link className="channels__link" to="/Steamscord">
        {/* to="/Steamscord/chatpagesecond" */}
        {text}
      </Link>
    </li>
  );
};

export default ChannelItem;
