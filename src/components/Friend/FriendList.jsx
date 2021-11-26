import React from "react";
import { useSelector } from "react-redux";
import FriendItem from "./FriendItem";
import "./Friend.scss";

const FriendList = () => {
  const { friends } = useSelector((state) => state.ProfileReducer);
  const friendList = friends.map((item) => {
    return <FriendItem key={item.id} name={item.name} image={item.image} />;
  });
  return <ul className="friends">{friendList}</ul>;
};

export default FriendList;
