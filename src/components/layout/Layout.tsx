import React, { useState } from 'react';

import { Outlet, useNavigate } from 'react-router';

import { Layout, Menu, Row, Col, Modal } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LogoutOutlined,
    SettingOutlined
} from '@ant-design/icons';

import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { logOut } from 'app/slices/authSlice';

import ChannelList from 'components/ui/Channel/ChannelList';
import FriendList from 'components/ui/Friend/FriendList';
import Profile from 'components/layout/Profile/Profile';

import 'antd/dist/antd.css';

// /. imports

interface propTypes {
    users: any[];
    isError: boolean;
}

// /. interfaces

const GeneralLayout: React.FC<propTypes> = ({ users, isError }) => {
    const { Header, Sider, Content } = Layout;
    const { confirm } = Modal;

    const { channels } = useAppSelector(state => state.mainReducer);
    const { isUserAuthorized, isUserRemembered } = useAppSelector(
        state => state.authReducer
    );

    const [collapsed, setCollapsedStatus] = useState<boolean>(true);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // /. hooks

    const AsideToggle = (): void => {
        window.innerWidth >= 768 && setCollapsedStatus(!collapsed);
    };

    const handleExitModal = (): void => {
        confirm({
            title: 'Exit',
            open: isModalVisible,
            content: 'Are you sure?',
            okText: 'Submit',
            onOk() {
                setIsModalVisible(false);
                dispatch(logOut({ isTotalReset: !isUserRemembered }));
                navigate('/');

                localStorage.setItem(
                    'storageIsUserAuth',
                    JSON.stringify(false)
                );

                if (!isUserRemembered) {
                    localStorage.setItem(
                        'storageUserData',
                        JSON.stringify({
                            login: '',
                            password: ''
                        })
                    );
                }
            },
            onCancel() {
                setIsModalVisible(false);
            }
        });
    };

    // const inputMessageHandle = (event): void => {
    //   console.log(event.target.value);
    // };

    const openHomePage = (): void => {
        navigate('/');
    };

    const openProfileSettings = (): void => {
        navigate('/Settings');
    };

    // /. functions

    return (
        <Layout
            style={{
                height: '100%'
            }}
        >
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ position: 'relative' }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item
                        key="1"
                        icon={<SettingOutlined />}
                        style={{ marginTop: '0' }}
                        onClick={openProfileSettings}
                    >
                        settings
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        icon={<VideoCameraOutlined />}
                    >
                        meeting
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        icon={<UploadOutlined />}
                    >
                        upload
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        icon={<LogoutOutlined />}
                        onClick={() => isUserAuthorized && handleExitModal()}
                        style={{ margin: '0' }}
                    >
                        Log Out
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: AsideToggle
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: 0,
                        padding: 0,
                        minHeight: 280
                    }}
                >
                    <div className="content">
                        <Row className="content__wrapper">
                            <Col
                                md={0}
                                lg={6}
                                xl={6}
                                xxl={4}
                                className="content__section content__section--left"
                            >
                                {/*  */}
                                <Row>
                                    <Col style={{ width: '100%' }}>
                                        <div className="content__header">
                                            <h2 className="content__title content__title--main">
                                                Personal content
                                            </h2>
                                            <button
                                                className="content__button content__button--home"
                                                onClick={openHomePage}
                                            >
                                                <AiOutlineHome
                                                    size={20}
                                                    color={'#fff'}
                                                />
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                                {/*  */}
                                <div className="content__body">
                                    <Row>
                                        <Col style={{ width: '100%' }}>
                                            <div className="content__section-header">
                                                <h2 className="content__title">
                                                    Channels
                                                </h2>
                                                <span className="content__counter">
                                                    {channels?.length || 0}
                                                </span>
                                            </div>
                                            <ChannelList />
                                        </Col>
                                    </Row>
                                    {/*  */}
                                    <Row>
                                        <Col style={{ width: '100%' }}>
                                            <div className="content__section-header">
                                                <h2 className="content__title">
                                                    Friends
                                                </h2>
                                                <span className="content__counter">
                                                    {users?.length || 0}
                                                </span>
                                            </div>
                                            <ul className="friends">
                                                {' '}
                                                <FriendList
                                                    users={users}
                                                    isError={isError}
                                                />
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            {/* /. COL LEFT */}
                            <Col
                                md={24}
                                lg={18}
                                xl={18}
                                xxl={isUserAuthorized ? 17 : 20}
                                className="content__section content__section--main"
                            >
                                <div className="chat">
                                    <Outlet />
                                </div>
                            </Col>
                            {/* /. COL MIDDLE */}
                            <>
                                {isUserAuthorized && (
                                    <Col
                                        xs={0}
                                        xxl={3}
                                        className="content__section content__section--right"
                                    >
                                        <Profile
                                            isModalVisible={isModalVisible}
                                            setIsModalVisible={
                                                setIsModalVisible
                                            }
                                        />
                                    </Col>
                                )}
                            </>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default GeneralLayout;
