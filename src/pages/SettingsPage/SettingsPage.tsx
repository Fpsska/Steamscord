import React from 'react';

import { Row, Col, Card, Button, notification } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import { useAppSelector } from 'app/hooks';

import profileImg from 'assets/images/profile-main.png';

import './Settings.scss';

// /. imports

type NotificationType = 'success' | 'info' | 'warning' | 'error';

// /. types

const SettingsPage: React.FC = () => {
    const { userName } = useAppSelector(state => state.authReducer);

    // /. hooks

    const openNotificationWithIcon = (type: NotificationType): void => {
        notification[type]({
            message: 'Dear user!',
            description:
                'This feature is not yet available, Please try again later :)'
        });
    };

    // /. functions

    return (
        <Row
            className="settings"
            style={{ width: '100%', height: '100%' }}
        >
            <Col
                xxl={24}
                className="settings__column settings__column--right"
            >
                <div className="settings__wrapper account">
                    <button className="settings__button settings__button--close">
                        <span className="">
                            <CloseCircleOutlined />
                        </span>
                        <span className="">ESC</span>
                    </button>
                    <div className="account__section account__section--review">
                        <h3 className="settings__title">My Account</h3>
                        {/*  */}
                        <div className="site-card-border-less-wrapper">
                            <Card
                                title="Profile review"
                                bordered={false}
                                style={{
                                    maxWidth: '700px',
                                    width: '100%',
                                    backgroundColor: '#666',
                                    borderRadius: '5px'
                                }}
                            >
                                <div className="account-card">
                                    <div className="account-card__header">
                                        <div className="account-card__preview">
                                            <img
                                                className="account-card__image"
                                                src={profileImg}
                                                alt="avatar"
                                            />
                                            <span className="account-card__name">
                                                {userName}#1531
                                            </span>
                                        </div>
                                        <Button
                                            className="settings__button account__button--profileEdit"
                                            type="primary"
                                            onClick={() =>
                                                openNotificationWithIcon('info')
                                            }
                                        >
                                            Edit User Profile
                                        </Button>
                                    </div>
                                    <div className="account-card__bottom">
                                        <div className="account-card__section">
                                            <div className="account-card__row">
                                                <div className="account-card__text">
                                                    <h4 className="account-card__username settings__subtitle">
                                                        username
                                                    </h4>
                                                    <span className="account-card__username--text">
                                                        {userName}#1531
                                                    </span>
                                                </div>
                                                <button
                                                    className="settings__button account__button--edit"
                                                    onClick={() =>
                                                        openNotificationWithIcon(
                                                            'info'
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                        <div className="account-card__section">
                                            <div className="account-card__row">
                                                <div className="account-card__text">
                                                    <h4 className="account-card__email settings__subtitle">
                                                        email
                                                    </h4>
                                                    <span className="account-card__email--text">
                                                        ********@gmail.com
                                                    </span>
                                                </div>
                                                <button
                                                    className="settings__button account__button--edit"
                                                    onClick={() =>
                                                        openNotificationWithIcon(
                                                            'info'
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                        <div className="account-card__section">
                                            <div className="account-card__row">
                                                <div className="account-card__text">
                                                    <h4 className="account-card__phone settings__subtitle">
                                                        phone number
                                                    </h4>
                                                    <span className="account-card__phone--text">
                                                        You haven&apos;t added a
                                                        phone number yet.
                                                    </span>
                                                </div>
                                                <button
                                                    className="settings__button account__button--add"
                                                    onClick={() =>
                                                        openNotificationWithIcon(
                                                            'info'
                                                        )
                                                    }
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        {/* /. account-card */}
                    </div>
                    {/* /. account__section */}
                    <div className="account__section account__section--authenfication">
                        <h3 className="settings__title">
                            Password and Authenfication
                        </h3>
                        <Button
                            className="settings__button account__button--password"
                            type="primary"
                            onClick={() => openNotificationWithIcon('info')}
                        >
                            Change Password
                        </Button>
                        <div className="">
                            <h4 className="settings__subtitle">
                                Two-factor authentication
                            </h4>
                            <p className="settings__text">
                                Protect your Discord account with an extra layer
                                of security. Once configured, you&apos;ll be
                                required to enter both your password and an
                                authentication code from your mobile phone in
                                order to sign in.
                            </p>
                            <Button
                                className="settings__button account__button--authenfication"
                                type="primary"
                                onClick={() => openNotificationWithIcon('info')}
                            >
                                Enable Two-Factor Auth
                            </Button>
                        </div>
                    </div>
                    {/* /. account__section */}
                    <div className="account__section account__section--removal">
                        <h4 className="settings__subtitle">Account Removal</h4>
                        <p className="settings__text">
                            Disabling your account means you can recover it at
                            any time after taking this action.
                        </p>
                        <div className="account__buttons">
                            <Button
                                className="settings__button account__button--disableAcc"
                                type="primary"
                                danger
                                onClick={() => openNotificationWithIcon('info')}
                            >
                                Disable Account
                            </Button>
                            <Button
                                className="settings__button account__button--deleteAcc"
                                danger
                                disabled
                            >
                                Delete Account
                            </Button>
                        </div>
                    </div>
                    {/* /. account__section */}
                </div>
            </Col>
        </Row>
    );
};

export default SettingsPage;
