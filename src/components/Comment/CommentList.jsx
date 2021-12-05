import React from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";
import "./Comment.scss";

const CommentsList = () => {
  const { messagesPageFirst } = useSelector((state) => state.ChatReducer);

  const commentList = messagesPageFirst.map((item) => {
    return (
      <CommentItem
        key={item.id}
        name={item.name}
        image={item.image}
        text={item.text}
        time={item.time}
      />
    );
  });
  return <div className="message">{commentList}</div>;
};

export default CommentsList;
