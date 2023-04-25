import React, { useState, useEffect } from 'react';

import { Button, Form, Input, Modal, message } from 'antd';
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaInstagramSquare
} from 'react-icons/fa';

import { useAppSelector } from 'app/hooks';

import { getRandomGameArrayItem } from 'utils/helpers/getRandomGameArrayItem';

import placeholderIMG from '../../../assets/images/profile-main.png';

import './profile.scss';

// /.imports

interface propTypes {
    isModalVisible: boolean;
    setIsModalVisible: (arg: boolean) => void;
}

// /. interfaces

const Profile: React.FC<propTypes> = ({
    isModalVisible,
    setIsModalVisible
}) => {
    const { login, isUserAuthorized } = useAppSelector(
        state => state.authReducer
    );
    const { currentUser, timeZones } = useAppSelector(
        state => state.profileReducer
    );

    const [isButtonLoading, setLoadingStatus] = useState(false);
    const [timeZone, setTimeZone] = useState('');

    const { TextArea } = Input;

    // /. hooks

    const isUserDataExist = isUserAuthorized && currentUser.length !== 0;
    const isUserActive = +currentUser[0]?.id.slice(-1) > 4 ? true : false;

    function handleCancelModal(): void {
        setIsModalVisible(false);
    }

    const openMessageModal = (): void => {
        setIsModalVisible(true);
    };

    const sendMessage = (): void => {
        setLoadingStatus(true);
        setTimeout(() => {
            setIsModalVisible(false);
            setLoadingStatus(false);
        }, 2200);
        setTimeout(() => {
            message.success('Message sent successfully!');
        }, 3000);
        // inputMessageHandle();
    };

    // /. functions

    useEffect(() => {
        setTimeZone(timeZones[getRandomGameArrayItem(timeZones)]);
    }, [currentUser]);

    // /. effects
    if (isUserAuthorized) {
        return (
            <div className={`profile ${isUserActive ? 'active' : ''}`}>
                <div className="profile__image">
                    <img
                        src={
                            isUserDataExist
                                ? currentUser[0].avatarFull
                                : placeholderIMG
                        }
                        alt="profile image"
                    />
                </div>

                <div className="profile__wrapper">
                    <div className="profile__bio">
                        <div className="name">
                            <h2
                                className="name__text"
                                title={
                                    isUserDataExist
                                        ? currentUser[0].name
                                        : login
                                }
                            >
                                {isUserDataExist ? currentUser[0].name : login}
                            </h2>
                            {isUserDataExist && (
                                <span className="name__prefix"></span>
                            )}
                        </div>
                        <span className="profile__status">
                            {isUserAuthorized
                                ? 'verified profile'
                                : 'unregistered profile'}
                        </span>
                    </div>

                    <ul className="profile__social social">
                        <li className="social__icon">
                            <a
                                className="social__link"
                                href="#"
                            >
                                <FaFacebookSquare size={22} />
                            </a>
                        </li>
                        <li className="social__icon">
                            <a
                                className="social__link"
                                href="#"
                            >
                                <FaTwitterSquare size={22} />
                            </a>
                        </li>
                        <li className="social__icon">
                            <a
                                className="social__link"
                                href="#"
                            >
                                <FaInstagramSquare size={22} />
                            </a>
                        </li>
                        <li className="social__icon">
                            <a
                                className="social__link"
                                href="#"
                            >
                                <FaLinkedin size={22} />
                            </a>
                        </li>
                    </ul>

                    {isUserDataExist && (
                        <>
                            <Button
                                type="primary"
                                className="profile__button"
                                onClick={openMessageModal}
                                disabled={!isUserAuthorized}
                            >
                                Message
                            </Button>
                            <Modal
                                open={isModalVisible}
                                title={`Write your message from ${
                                    currentUser[0].name || 'this user'
                                } there!`}
                                onOk={sendMessage}
                                onCancel={handleCancelModal}
                                footer={[
                                    <Button
                                        key="back"
                                        onClick={handleCancelModal}
                                    >
                                        Cancel
                                    </Button>,
                                    <Button
                                        key="submit"
                                        type="primary"
                                        loading={isButtonLoading}
                                        onClick={sendMessage}
                                    >
                                        Send
                                    </Button>
                                ]}
                            >
                                <Form>
                                    <TextArea rows={4} />
                                </Form>
                            </Modal>
                        </>
                    )}

                    <ul className="profile__information information">
                        <li className="information__template">
                            <span className="information__title">
                                User name
                            </span>
                            <a
                                className="information__link"
                                href="#"
                                title={
                                    isUserDataExist
                                        ? currentUser[0].name
                                        : login
                                }
                            >
                                {isUserDataExist ? currentUser[0].name : login}
                            </a>
                        </li>
                        <li className="information__template">
                            <span className="information__title">Email</span>
                            <a
                                className="information__link"
                                href="#"
                            >
                                {isUserDataExist
                                    ? 'mail-secret.com'
                                    : 'mail@placeholder.com'}
                            </a>
                        </li>
                        <li className="information__template">
                            <span className="information__title">Skype</span>
                            <a
                                className="information__link"
                                href="#"
                            >
                                {isUserAuthorized ? 'skype-placeholder' : '-'}
                            </a>
                        </li>
                        <li className="information__template">
                            <span className="information__title">Timezone</span>
                            <a
                                className="information__link"
                                href="#"
                                title={timeZone}
                            >
                                {timeZone}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    return <></>;
};

export default Profile;
