import React from 'react';

import { Icomment } from 'types/profileSliceTypes';

import MessageTemplate from './MessageTemplate';

import './message.scss';

// /. imports

const MessageList: React.FC<{ availableItems: Icomment[] }> = ({
    availableItems
}) => {
    return (
        <div className="messages">
            {availableItems.map((message: Icomment) => {
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
