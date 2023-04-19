import React from 'react';

import { Skeleton, Space, Row } from 'antd';

import { useAppSelector } from 'app/hooks';

import { Iuser } from 'types/profileSliceTypes';

import FriendItem from './FriendItem';

import './Friend.scss';

// /. imports

interface propTypes {
    users: Iuser[];
    isError: boolean;
}

// /. interfaces

const FriendList: React.FC<propTypes> = ({ users, isError }) => {
    const { isUserAuthorized } = useAppSelector(state => state.authReducer);

    // /. hooks

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
                users.map((user: Iuser) => {
                    return (
                        <FriendItem
                            key={user.steamid}
                            status={+user.steamid.slice(-1) > 4 ? true : false}
                            id={user.steamid}
                            name={user.personaname}
                            image={user.avatarmedium}
                            {...user}
                        />
                    );
                })
            )}
        </>
    );
};

export default FriendList;
