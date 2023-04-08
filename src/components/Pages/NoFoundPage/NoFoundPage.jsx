import React from 'react';

import { Empty } from 'antd';

import ChatHeader from 'components/Chat/ChatHeader';
import ChatForm from 'components/Chat/ChatForm';

// /. imports

const NoFoundPage = () => {
  return (
    <>
      <ChatHeader />
      <Empty style={{ margin: 'auto' }} />
      <ChatForm />
    </>
  );
};

export default NoFoundPage;
