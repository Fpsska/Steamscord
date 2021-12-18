import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChannelItem = ({ text, link }) => {
  const { isSelected } = useSelector((state) => state.chatReducer);

  return (
    <li className="channels__item">
      <Link className="channels__link" to={link}>
        {text}
      </Link>
    </li>
  );
};

export default ChannelItem;
