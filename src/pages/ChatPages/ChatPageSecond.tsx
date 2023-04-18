import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Empty } from 'antd';

import ChatHeader from 'components/layout/Chat/ChatHeader';
import ChatForm from 'components/layout/Chat/ChatForm';

import warningImg from 'assets/images/warning.png';

// /. imports

const ChatPageSecond: React.FC<{ isError: boolean }> = ({ isError }) => {
    const [isContentVisible, setContentVisibleStatus] = useState(false);
    const [isLoading, setLoadingStatus] = useState(false);

    const navigate = useNavigate();

    // /. hooks

    const acceptAction = () => {
        setLoadingStatus(true);
        setTimeout(() => {
            setLoadingStatus(false);
            setContentVisibleStatus(true);
        }, 3000);
    };

    const goBack = () => {
        navigate('/Steamscord', { replace: true });
    };

    // /. functions

    return (
        <>
            <ChatHeader
                channelName={'LocalElysium'}
                channelMembersCount={937}
                isError={isError}
            />
            {isContentVisible ? (
                <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    style={{ margin: 'auto' }}
                />
            ) : (
                <div className="warning">
                    <img
                        className="warning__image"
                        src={warningImg}
                        alt="warning"
                    />
                    <div className="warning__text">
                        <h2 className="warning__title">NSFW Channel</h2>
                        <p className="warning__description">
                            You must be at least eighteen years old to view this
                            channel. Are you over eighteen and willing to see
                            adult content?
                        </p>
                    </div>
                    <div className="warning__nav">
                        <Button
                            className="warning__button warning__button--cancel"
                            type="primary"
                            onClick={goBack}
                        >
                            Go homepage
                        </Button>
                        <Button
                            className="warning__button warning__button--accept"
                            type="primary"
                            danger
                            loading={isLoading}
                            onClick={acceptAction}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            <ChatForm isError={isError} />
        </>
    );
};

export default ChatPageSecond;
