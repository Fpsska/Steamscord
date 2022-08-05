import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentUser } from '../../app/store/profileSlice';

const FriendItem = ({ id, name, image, status, activity, users }) => {

  const { currentUser } = useSelector((state) => state.profileReducer);

  const [isAlreadyAdded, setAddedStatus] = useState(false);

  const dispatch = useDispatch();

  const setCurrentUser = () => {
    const currentUserbyID = users.filter(item => item.steamid === id);
    dispatch(getCurrentUser(currentUserbyID));
  };

  useEffect(() => { // check equal items in currentUser[]
    currentUser?.some(item => item.steamid === id) ? setAddedStatus(true) : setAddedStatus(false);
  }, [currentUser, id]);

  return (
    <li className="friends__item">
      <img
        className={status ? 'friends__image online' : 'friends__image'}
        src={image}
        alt="profle-avatar"
        onClick={() => !isAlreadyAdded && setCurrentUser()}
      />
      <div className="friends__information">
        <span className={status ? 'friends__name online' : 'friends__name'}>
          {name}
        </span>
        <span className={status ? 'friends__activity online' : 'friends__activity'}>
          {activity}
        </span>
      </div>
    </li>
  );
};

export default FriendItem;
