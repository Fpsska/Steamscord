import React from 'react';

import { Empty } from 'antd';

import ChatHeader from '../../Chat/ChatHeader';
import ChatForm from '../../Chat/ChatForm';

const NoFoundPage = () => {
  return (
    <>
      <ChatHeader />
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ margin: 'auto' }} />
      <ChatForm />
    </>
  );
};

export default NoFoundPage;
