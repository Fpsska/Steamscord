import React, { useMemo } from "react";

import { useSelector } from "react-redux";

import { Skeleton, Space } from "antd";

import { getRandomGameActivity } from "../../helpers/getRandomActivity";

import FriendItem from "./FriendItem";

import "./Friend.scss";

const FriendList = ({ data, isLoading, isError }) => {
  const { gameActivity } = useSelector((state) => state.chatReducer);
  // 
  const friendList = useMemo(
    () =>
      data.map((item) => {
        return (
          <FriendItem
            key={item.steamid}
            name={item.personaname}
            image={item.avatarmedium}
            status={Boolean(Math.round(Math.random()))}
            activity={gameActivity[getRandomGameActivity(gameActivity)]}
          />
        );
      }),
    [data, gameActivity]
  );

  return (
    <>
      {isError || isLoading ? (
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
        </Space>
      ) : friendList}
    </>
  );
};

export default FriendList;
