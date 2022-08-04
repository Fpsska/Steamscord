import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Input, Modal, message } from 'antd';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

import './profile.scss';

const Profile = ({ isModalVisible, setIsModalVisible }) => {

    const { userName, isAuthorized } = useSelector((state) => state.authReducer);
    const { currentUser } = useSelector((state) => state.profileReducer);

    const [isButtonLoading, setLoadingStatus] = useState(false);

    const { TextArea } = Input;

    const handleCancelModal = () => {
        setIsModalVisible(false);
    };

    const openMessageModal = () => {
        setIsModalVisible(true);
    };

    const sendMessage = () => {
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
    // /.MODAL

    return (
        <div className="profile">
            <img
                className="profile__image"
                src={!isAuthorized ? require('../../assets/images/profile-main.png').default
                    : isAuthorized && currentUser.length === 0 ? require('../../assets/images/profile-main.png').default
                        : currentUser[0]?.avatarfull}
                alt="profile"
            />

            <div className="profile__wrapper">
                <div className="profile__bio">
                    <div className="name">
                        <h2 className="name__text" title={!isAuthorized ? userName : isAuthorized && currentUser.length === 0 ? userName : currentUser[0]?.personaname}>
                            {!isAuthorized ? userName : isAuthorized && currentUser.length === 0 ? userName : currentUser[0]?.personaname}
                        </h2>
                        <span className={+String(currentUser[0]?.timecreated).slice(-1) > 4 ? 'name__prefix active' : 'name__prefix'}></span>
                    </div>
                    <span className="profile__status">{isAuthorized ? 'verified profile' : 'unregistered profile'}</span>
                </div>

                <ul className="profile__social social">
                    <li className="social__icon">
                        <a className="social__link" href="#"><FaFacebookSquare size={22} /></a>
                    </li>
                    <li className="social__icon">
                        <a className="social__link" href="#"><FaTwitterSquare size={22} /></a>
                    </li>
                    <li className="social__icon">
                        <a className="social__link" href="#"><FaInstagramSquare size={22} /></a>
                    </li>
                    <li className="social__icon">
                        <a className="social__link" href="#"><FaLinkedin size={22} /></a>
                    </li>
                </ul>
                {
                    !isAuthorized || (isAuthorized && currentUser.length === 0) ?
                        <></>
                        :
                        <>
                            <Button
                                type="primary"
                                className="profile__button"
                                onClick={openMessageModal}
                                disabled={!isAuthorized}
                            >
                                Message
                            </Button>
                            <Modal
                                visible={isModalVisible}
                                title={`Write your message from ${currentUser[0]?.personaname || 'this user'} there!`}
                                onOk={sendMessage}
                                onCancel={handleCancelModal}
                                footer={[
                                    <Button key="back" onClick={handleCancelModal}>Cancel</Button>,
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
                                <Form><TextArea rows={4} /></Form>
                            </Modal>
                        </>
                }
                <ul className="profile__information information">
                    <li className="information__template">
                        <span className="information__title">Username</span>
                        <a className="information__link" href="#" title={!isAuthorized ? userName : isAuthorized && currentUser.length === 0 ? userName : currentUser[0]?.personaname}>
                            {!isAuthorized ? userName : userName && currentUser.length === 0 ? userName : currentUser[0]?.personaname}
                        </a>
                    </li>
                    <li className="information__template">
                        <span className="information__title">Email</span>
                        {isAuthorized ?
                            <a className="information__link" href="mailto:a-luna@gmail.com">mail-placeholder.com</a>
                            :
                            <a className="information__link" href="#">-</a>
                        }
                    </li>
                    <li className="information__template">
                        <span className="information__title">Skype</span>
                        <a className="information__link" href="#">{isAuthorized ? 'skype_placeholder' : '-'}</a>
                    </li>
                    <li className="information__template">
                        <span className="information__title">Timezone</span>
                        <span>{new Date().toLocaleTimeString()} Local time</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
