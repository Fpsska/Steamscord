import React from "react";
import { Result, Button, Spin } from "antd";
import CommentItem from "./CommentItem";
import useGetProfileInfoQuery from "../../app/api/steamAPI";
import "./Comment.scss";

const CommentsList = () => {
  const { data = [], isLoading, error } = useGetProfileInfoQuery();

  const commentList = data.map((item) => {
    return (
      <CommentItem
        key={item.steamid}
        name={item.personaname}
        image={item.avatarmedium}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!"
        time={new Date().toLocaleTimeString()}
      />
    );
  });

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <Spin size="large" />
        </div>
      ) : error ? (
        <div className="loading">
          <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary">Refresh</Button>}
          />
        </div>
      ) : data ? (
        <div className="message">{commentList}</div>
      ) : null}
    </>
  );
};

export default CommentsList;
