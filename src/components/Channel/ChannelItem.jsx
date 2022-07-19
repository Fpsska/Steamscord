import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  switchHomePageStatus,
  switchSettingsStatus
} from '../../app/store/chatSlice';

const ChannelItem = ({ name, link }) => {
  const dispatch = useDispatch();

  const resetHomePageStatus = () => {
    dispatch(switchHomePageStatus(false));
    dispatch(switchSettingsStatus(false));
  };

  return (
    <li className="channels__item">
      <NavLink
        className="channels__link"
        to={link}
        onClick={resetHomePageStatus}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default ChannelItem;
