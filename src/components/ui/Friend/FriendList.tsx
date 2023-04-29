import React from 'react';

import { Skeleton, Space, Row } from 'antd';

import { useAppSelector } from 'app/hooks';

import { Ifriend } from 'types/profileSliceTypes';

import FriendItem from './FriendItem';

import './Friend.scss';

// /. imports

interface propTypes {
    users: Ifriend[];
    isError: boolean;
}

// /. interfaces

const FriendList: React.FC<propTypes> = ({ users, isError }) => {
    const { isUserAuthorized } = useAppSelector(state => state.authReducer);
    const { isDataLoading } = useAppSelector(state => state.profileReducer);

    // /. hooks

    const isSkeletionMarkupVisible =
        !isUserAuthorized || isError || isDataLoading;

    // /. variables

    return (
        <>
            {isSkeletionMarkupVisible ? (
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
                users.map((user: Ifriend) => {
                    return (
                        <FriendItem
                            key={user.id}
                            {...user}
                        />
                    );
                })
            )}
        </>
    );
};

export default FriendList;
