import React from 'react';

import { Empty } from 'antd';

import ChatHeader from 'components/layout/Chat/ChatHeader';
import ChatForm from 'components/layout/Chat/ChatForm';

// /. imports

const NoFoundPage: React.FC = () => {
    return (
        <>
            <ChatHeader />
            <Empty style={{ margin: 'auto' }} />
            <ChatForm />
        </>
    );
};

export default NoFoundPage;
