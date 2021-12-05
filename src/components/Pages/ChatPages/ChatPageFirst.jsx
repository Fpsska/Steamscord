import React from "react";
import { Spin } from "antd";
import CommentsList from "../../Comment/CommentList";
import { useSelector } from "react-redux";

const ChatPageFirst = () => {
  const { isFetching } = useSelector((state) => state.ChatReducer);
  return (
    <>
      {isFetching ? (
        <CommentsList />
      ) : (
        <Spin
          size="large"
          style={{
            margin: "auto",
          }}
        />
      )}
    </>
  );
};

export default ChatPageFirst;
