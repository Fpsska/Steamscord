import React from 'react';

import DateSectionSeparator from 'components/ui/DateSectionSeparator/DateSectionSeparator';

// /. imports

const ChatGreetingSection: React.FC<{ channelName: string }> = ({
    channelName
}) => {
    return (
        <div className="chat__greeting-section greeting-section">
            <h1 className="greeting-section__title">
                Welcome to {channelName}!
            </h1>
            <p className="greeting-section__description">
                This is the start of the {channelName} <b>private</b> channel.
            </p>
            <DateSectionSeparator date="March 31, 2019" />
        </div>
    );
};

export default ChatGreetingSection;
