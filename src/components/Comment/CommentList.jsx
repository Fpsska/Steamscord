import React, { useState, useLayoutEffect, useMemo } from "react";
import { Result, Empty, Button, Spin } from "antd";
import CommentItem from "./CommentItem";
import "./Comment.scss";

const CommentsList = ({ availableItems, isLoading, isError }) => {
  const [isMobileErrorTemplate, setMobileErrorTemplate] = useState(false);
  //
  const defineErrorTemplate = () => {
    if (window.innerWidth < 768 || window.innerHeight < 475) {
      setMobileErrorTemplate(true);
    } else if (window.innerWidth > 768 || window.innerHeight > 475) {
      setMobileErrorTemplate(false);
    }
  };
  //
  useLayoutEffect(() => {
    window.addEventListener("resize", defineErrorTemplate);
    window.addEventListener("load", defineErrorTemplate);
    return () => {
      window.removeEventListener("resize", defineErrorTemplate);
      window.removeEventListener("load", defineErrorTemplate);
    };
  }, []);

  const commentList = useMemo(
    () =>
      availableItems.map((item) => {
        return (
          <CommentItem
            key={item.steamid}
            name={item.personaname}
            image={item.avatarmedium}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!"
            time={new Date().toLocaleTimeString()}
          />
        );
      }),
    [availableItems]
  );

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <Spin size="large" />
        </div>
      ) : isError ? (
        <div className="loading">
          {isMobileErrorTemplate ? (
            <div className="loading__error">
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                style={{ margin: "0 0 10px 0" }}
              />
              <p className="loading__text">Sorry, something went wrong.</p>
            </div>
          ) : (
            <Result
              status="500"
              title="500"
              subTitle="Sorry, something went wrong."
              extra={<Button type="primary">Refresh</Button>}
            />
          )}
        </div>
      ) : availableItems ? (
        <div className="message">{commentList}</div>
      ) : null}
    </>
  );
};

export default CommentsList;
