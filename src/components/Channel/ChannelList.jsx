import React from 'react';
import { useSelector } from 'react-redux';

import ChannelItem from './ChannelItem';

import './Channel.scss';

const ChannelList = () => {
  const { channels } = useSelector(state => state.mainReducer);

  return (
    <ul className="channels">
      {channels.map(item => {
        return (
          <ChannelItem
            key={item.id}
            name={item.name}
            link={item.link}
          />
        );
      })}
    </ul>
  );
};

export default ChannelList;
