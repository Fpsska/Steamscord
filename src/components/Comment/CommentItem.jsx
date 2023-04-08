import React from 'react';

// /. imports

const CommentItem = ({ name, comment, image, time }) => {
  return (
    <div className="message__template">
      <img
        className="message__profile-image"
        src={image}
        alt="profile-avatar"
      />
      <div className="message__content">
        <div className="message__information">
          <span className="message__name">{name}</span>
          <span className="message__time">{time}</span>
        </div>
        <p className="message__text">{comment}.</p>
      </div>
    </div>
  );
};

export default CommentItem;
