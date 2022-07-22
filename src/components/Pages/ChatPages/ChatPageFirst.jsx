import React from 'react';

import CommentsList from '../../Comment/CommentList';
import ChatHeader from '../../Chat/ChatHeader';
import ChatForm from '../../Chat/ChatForm';

const ChatPageFirst = ({ availableItems, isError, isLoading }) => {

  return (
    <>
      <ChatHeader
      // enteredSearchValue={enteredSearchValue}
      // setEnteredSearchValue={setEnteredSearchValue}
      />
      <CommentsList
        availableItems={availableItems}
        isLoading={isLoading}
        isError={isError}
      />
      <ChatForm />
    </>
  );
};

export default ChatPageFirst;
