import React from "react";
import { Link } from "react-router-dom";

const ChannelItem = ({ text, link }) => {
  return (
    <li className="channels__item">
      <Link className="channels__link" to={link}>
        {text}
      </Link>
    </li>
  );
};

export default ChannelItem;
