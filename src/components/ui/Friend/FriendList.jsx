import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';

import { Skeleton, Space, Row } from 'antd';

import { getRandomGameArrayItem } from 'utils/helpers/getRandomGameArrayItem';

import FriendItem from './FriendItem';

import './Friend.scss';

// /. imports

const FriendList = ({ users, isError }) => {
  const { gameActivity } = useSelector(state => state.profileReducer);
  const { isAuthorized } = useSelector(state => state.authReducer);

  // /. hooks

  const friendList = useMemo(
    () =>
      users.map(item => {
        return (
          <FriendItem
            key={item.steamid}
            id={item.steamid}
            name={item.personaname}
            image={item.avatarmedium}
            status={
              +String(item.timecreated).slice(-1) > 4
                ? true
                : false
            }
            activity={
              gameActivity[getRandomGameArrayItem(gameActivity)]
            }
          />
        );
      }),
    [users, gameActivity]
  );

  return (
    <>
      {!isAuthorized || isError ? (
        <Space
          direction="vertical"
          style={{ width: '100%' }}
          size="large"
        >
          <Row>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: '0 15px 0 0' }}
            />
            <Skeleton.Button
              active="active"
              size="middle"
              shape="round"
            />
          </Row>
          <Row>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: '0 15px 0 0' }}
            />
            <Skeleton.Button
              active="active"
              size="middle"
              shape="round"
            />
          </Row>
          <Row>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: '0 15px 0 0' }}
            />
            <Skeleton.Button
              active="active"
              size="middle"
              shape="round"
            />
          </Row>
          <Row>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: '0 15px 0 0' }}
            />
            <Skeleton.Button
              active="active"
              size="middle"
              shape="round"
            />
          </Row>
          <Row>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: '0 15px 0 0' }}
            />
            <Skeleton.Button
              active="active"
              size="middle"
              shape="round"
            />
          </Row>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: '0 15px 0 0' }}
            />
            <Skeleton.Button
              active="active"
              size="middle"
              shape="round"
            />
          </div>
        </Space>
      ) : (
        friendList
      )}
    </>
  );
};

export default FriendList;
