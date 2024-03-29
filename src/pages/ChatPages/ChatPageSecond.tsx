import React, { useState } from 'react';

import { Row, Button } from 'antd';

import { useNavigate } from 'react-router-dom';

import ChatHeader from 'components/layout/Chat/ChatHeader';
import ChatBottom from 'components/layout/Chat/ChatBottom';
import DataPlaceholderMarkup from 'components/ui/DataPlaceholderMarkup/DataPlaceholderMarkup';

import warningImg from 'assets/images/warning.png';

// /. imports

const ChatPageSecond: React.FC<{ isError?: boolean }> = ({
    isError = false
}) => {
    const [isContentVisible, setContentVisibleStatus] =
        useState<boolean>(false);
    const [isLoading, setLoadingStatus] = useState<boolean>(false);

    const navigate = useNavigate();

    // /. hooks

    const acceptAction = (): void => {
        setLoadingStatus(true);
        setTimeout(() => {
            setLoadingStatus(false);
            setContentVisibleStatus(true);
        }, 3000);
    };

    const goBack = (): void => {
        navigate('/', { replace: true });
    };

    // /. functions

    return (
        <>
            <ChatHeader
                channelName="LocalElysium"
                channelMembersCount="937"
                isError={isError}
            />
            {isContentVisible ? (
                <DataPlaceholderMarkup
                    title="no data"
                    image="big"
                />
            ) : (
                <Row className="chat__middle">
                    <div className="warning">
                        <img
                            className="warning__image"
                            src={warningImg}
                            alt="warning"
                        />
                        <div className="warning__text">
                            <h2 className="warning__title">NSFW Channel</h2>
                            <p className="warning__description">
                                You must be at least eighteen years old to view
                                this channel. Are you over eighteen and willing
                                to see adult content?
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
                </Row>
            )}
            <ChatBottom isError={isError} />
        </>
    );
};

export default ChatPageSecond;
