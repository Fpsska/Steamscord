import React, { useMemo } from 'react';

import { Skeleton, Space, Row } from 'antd';

import { useAppSelector } from 'app/hooks';

import { getRandomGameArrayItem } from 'utils/helpers/getRandomGameArrayItem';

import FriendItem from './FriendItem';

import './Friend.scss';

// /. imports

interface propTypes {
    users: any[];
    isError: boolean;
}

// /. interfaces

const FriendList: React.FC<propTypes> = ({ users, isError }) => {
    const { gameActivity } = useAppSelector(state => state.profileReducer);
    const { isUserAuthorized } = useAppSelector(state => state.authReducer);

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
                        status={+item.steamid.slice(-1) > 4 ? true : false}
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
            {!isUserAuthorized || isError ? (
                <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                >
                    <Row>
                        <Skeleton.Avatar
                            active={true}
                            size="large"
                            shape="square"
                            style={{ margin: '0 15px 0 0' }}
                        />
                        <Skeleton.Button
                            active={true}
                            size="large"
                            shape="round"
                        />
                    </Row>
                    <Row>
                        <Skeleton.Avatar
                            active={true}
                            size="large"
                            shape="square"
                            style={{ margin: '0 15px 0 0' }}
                        />
                        <Skeleton.Button
                            active={true}
                            size="large"
                            shape="round"
                        />
                    </Row>
                    <Row>
                        <Skeleton.Avatar
                            active={true}
                            size="large"
                            shape="square"
                            style={{ margin: '0 15px 0 0' }}
                        />
                        <Skeleton.Button
                            active={true}
                            size="large"
                            shape="round"
                        />
                    </Row>
                    <Row>
                        <Skeleton.Avatar
                            active={true}
                            size="large"
                            shape="square"
                            style={{ margin: '0 15px 0 0' }}
                        />
                        <Skeleton.Button
                            active={true}
                            size="large"
                            shape="round"
                        />
                    </Row>
                    <Row>
                        <Skeleton.Avatar
                            active={true}
                            size="large"
                            shape="square"
                            style={{ margin: '0 15px 0 0' }}
                        />
                        <Skeleton.Button
                            active={true}
                            size="large"
                            shape="round"
                        />
                    </Row>
                    <div>
                        <Skeleton.Avatar
                            active={true}
                            size="large"
                            shape="square"
                            style={{ margin: '0 15px 0 0' }}
                        />
                        <Skeleton.Button
                            active={true}
                            size="large"
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
