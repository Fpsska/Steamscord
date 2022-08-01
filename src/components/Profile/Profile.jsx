import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Input, Modal, message } from 'antd';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

import './profile.scss';

const Profile = ({ isModalVisible, setIsModalVisible }) => {

    const { userName, isAuthorized } = useSelector((state) => state.authReducer);
    const { isInputActive } = useSelector((state) => state.chatReducer);


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
                src={
                    require('../../assets/images/profile-main.png').default
                }
                alt="profile"
            />

            <div className="profile__wrapper">
                <div className="profile__bio">
                    <h2 className="profile__name">{userName}</h2>
                    <span className="profile__position">{isAuthorized ? 'verified profile' : 'unregistered profile'}</span>
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
                <>
                    <Button
                        type="primary"
                        className="profile__button"
                        onClick={openMessageModal}
                        disabled={!isInputActive}
                    >
                        Message
                    </Button>
                    <Modal
                        visible={isModalVisible}
                        title="Write your message there!"
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
                <ul className="profile__information information">
                    <li className="information__template">
                        <span className="information__title">Username</span>
                        <a className="information__link" href="#">{isAuthorized ? `@${userName}` : '-'}</a>
                    </li>
                    <li className="information__template">
                        <span className="information__title">Email</span>
                        <a className="information__link" href="mailto:a-luna@gmail.com">{isAuthorized ? 'a-dropmail.com' : '-'}</a>
                    </li>
                    <li className="information__template">
                        <span className="information__title">Skype</span>
                        <a className="information__link" href="#">{isAuthorized ? `${userName}_skype` : '-'}</a>
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
