import React from "react";

const FriendItem = ({ name, image, status, activity }) => {
  return (
    <li className="friends__item">
      <img
        className={
          status ? "friends__image friends__image--online" : "friends__image"
        }
        src={require(`../../assets/images/${image}`).default}
        alt="img"
      />

      <div className="friends__information">
        <span
          className={
            status ? "friends__name friends__name--online" : "friends__name"
          }
        >
          {name}
        </span>
        <span
          className={
            status
              ? "friends__status friends__status--online"
              : "friends__status"
          }
        >
          {activity}
        </span>
      </div>
    </li>
  );
};

export default FriendItem;
