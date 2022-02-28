import React from "react";
// import { Avatar } from "antd";
// import { UserOutlined } from "@ant-design/icons";

const CommentItem = ({ name, text, image, time }) => {
  return (
    <div className="message__template">
      {/* <Avatar className="message__profile-image" shape="square" size={40} icon={<UserOutlined />} /> */}
      <img className="message__profile-image" src={image} alt="profile" />
      <div className="message__content">
        <div className="message__information">
          <span className="message__name">{name}</span>
          <span className="message__time">{time}</span>
        </div>
        <p className="message__text">{text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
