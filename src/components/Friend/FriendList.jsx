import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import FriendItem from "./FriendItem";
import useGetProfileInfoQuery from "../../app/api/steamAPI"
import "./Friend.scss";

const FriendList = () => {

  const {data = [], isLoading} = useGetProfileInfoQuery()

  const { gameActivity } = useSelector((state) => state.chatReducer);

  const friendList = data.map((item) => {
    const getGameActivity = Math.floor(Math.random() * gameActivity.length);

    return (
      <FriendItem
        key={item.steamid}
        name={item.personaname}
        image={item.avatarmedium}
        status={Boolean(Math.round(Math.random()))}
        activity={(getGameActivity, gameActivity[getGameActivity])}
      />
    );
  });
  return <ul className="friends">{friendList}</ul>;
};

export default FriendList;
