import React from "react";
import { NavLink } from "react-router-dom";

const ChannelItem = ({ name, link }) => {
  return (
    <li className="channels__item">
      <NavLink className="channels__link" to={link}>
        {name}
      </NavLink>
    </li>
  );
};

export default ChannelItem;
