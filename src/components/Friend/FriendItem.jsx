import React from "react";

const FriendItem = ({ name, image }) => {
  return (
    <li className="friends__item">
      <img className="friends__image" src={require(`../../assets/images/${image}`).default} alt="img" />
      <span className="friends__name">{name}</span>
    </li>
  );
};

export default FriendItem;
