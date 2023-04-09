import React from 'react';

import { useAppSelector } from 'app/hooks';

import ChannelItem from './ChannelItem';

import './Channel.scss';

// /. imports

const ChannelList: React.FC = () => {
    const { channels } = useAppSelector(state => state.mainReducer);

    // /. hooks

    return (
        <ul className="channels">
            {channels.map((item: any) => {
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
