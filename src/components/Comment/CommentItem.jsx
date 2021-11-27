import React from "react";

const CommentItem = ({ name, image, text, time }) => {
  return (
    <div className="message__template">
      <img
        className="message__profile-image"
        src={require(`../../assets/images/${image}`).default}
        alt="profile"
      />
      <div className="message__content">
        <div className="message__information">
          <span className="message__name">{name}</span>
          <span className="message__time">{time}</span>
        </div>
        <p className="message__text">{text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
