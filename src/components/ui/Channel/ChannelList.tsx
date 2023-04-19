import React from 'react';

import { useAppSelector } from 'app/hooks';

import { Ichannel } from 'types/mainSliceTypes';

import ChannelItem from './ChannelItem';

import './Channel.scss';

// /. imports

const ChannelList: React.FC = () => {
    const { channels } = useAppSelector(state => state.mainReducer);

    // /. hooks

    return (
        <ul className="channels">
            {channels.map((channel: Ichannel) => {
                return (
                    <ChannelItem
                        key={channel.id}
                        {...channel}
                    />
                );
            })}
        </ul>
    );
};

export default ChannelList;
