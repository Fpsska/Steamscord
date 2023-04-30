import React from 'react';

import { Empty } from 'antd';

import ChatHeader from 'components/layout/Chat/ChatHeader';
import ChatForm from 'components/layout/Chat/ChatBottom';

import DataPlaceholderMarkup from 'components/ui/DataPlaceholderMarkup/DataPlaceholderMarkup';

// /. imports

const NoFoundPage: React.FC = () => {
    return (
        <>
            <ChatHeader />
            <DataPlaceholderMarkup
                title="no data"
                image="big"
            />
            <ChatForm />
        </>
    );
};

export default NoFoundPage;
