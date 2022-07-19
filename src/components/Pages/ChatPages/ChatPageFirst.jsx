import React from 'react';

import CommentsList from '../../Comment/CommentList';

const ChatPageFirst = ({ availableItems, isError, isLoading }) => {
  
  return (
    <CommentsList
      availableItems={availableItems}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default ChatPageFirst;
