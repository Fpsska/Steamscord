import React from 'react';

import { Imessage } from 'types/profileSliceTypes';

import MessageTemplate from './MessageTemplate';

import './message.scss';

// /. imports

const MessageList: React.FC<{ availableItems: Imessage[] }> = ({
    availableItems
}) => {
    return (
        <div className="messages">
            {availableItems.map((message: Imessage) => {
                return (
                    <MessageTemplate
                        key={message.id}
                        time={message.dateOfCreate}
                        {...message}
                    />
                );
            })}
        </div>
    );
};

export default MessageList;
