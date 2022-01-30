import React from "react";
import CommentsList from "../../Comment/CommentList";

const ChatPageFirst = ({ availableItems, error, isLoading }) => {
  return (
    <CommentsList
      availableItems={availableItems}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default ChatPageFirst;
