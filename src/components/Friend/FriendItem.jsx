import React from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUser } from '../../app/store/profileSlice';

const FriendItem = ({ id, name, image, status, activity, data }) => {
  
  const dispatch = useDispatch();

  const setCurrentUser = () => {
    const currentUser = data.filter(item => item.steamid === id);
    dispatch(getCurrentUser(currentUser));
  };

  return (
    <li className="friends__item">
      <img
        className={status ? 'friends__image friends__image--online' : 'friends__image'}
        src={image}
        alt="profle"
        onClick={setCurrentUser}
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
