import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import FriendItem from "./FriendItem";
import "./Friend.scss";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => console.log("CATCH ERROR:", error));
  }, []);

  const { gameActivity } = useSelector((state) => state.ChatReducer);

  const friendList = friends.map((item) => {
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
