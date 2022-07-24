import React from 'react';

const FriendItem = ({ name, image, status, activity }) => {
  return (
    <li className="friends__item">
      <img
        className={status ? 'friends__image friends__image--online' : 'friends__image'}
        src={image}
        alt="profle"
      />

      <div className="friends__information">
        <span
          className={status ? 'friends__name friends__name--online' : 'friends__name'}
        >
          {name}
        </span>
        <span
          className={status ? 'friends__activity friends__activity--online' : 'friends__activity'}
        >
          {activity}
        </span>
      </div>
    </li>
  );
};

export default FriendItem;
