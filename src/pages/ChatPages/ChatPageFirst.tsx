import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { Row, Col, Spin, Result, Empty } from 'antd';

import MessageList from 'components/ui/Message/MessageList';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { switchFirstPageLoadingStatus } from 'app/slices/mainSlice';

import { useFilter } from 'utils/hook/useFilter';

import ChatHeader from 'components/layout/Chat/ChatHeader';
import ChatBottom from 'components/layout/Chat/ChatBottom';

import DataPlaceholderMarkup from 'components/ui/DataPlaceholderMarkup/DataPlaceholderMarkup';
import ChatGreetingSection from 'components/layout/Chat/ChatGreetingSection';

// /. imports

interface propTypes {
    isLoading: boolean;
    isError: boolean;
}

// /. interfaces

const ChatPageFirst: React.FC<propTypes> = props => {
    const { isLoading, isError } = props;

    const { isFirstPageLoading } = useAppSelector(state => state.mainReducer);
    const { comments, isCommentCreated } = useAppSelector(
        state => state.profileReducer
    );

    const [isMobileErrorTemplate, setMobileErrorTemplate] =
        useState<boolean>(false);

    const { enteredSearchValue, setEnteredSearchValue, availableItems } =
        useFilter(comments, 'name');

    const dispatch = useAppDispatch();

    const chatBodyRef = useRef<HTMLDivElement>(null!);

    // /. hooks

    const isCommentsDataEmpty =
        comments.length === 0 || availableItems.length === 0;

    // /. variables

    useLayoutEffect(() => {
        // logic of define correct error markup
        const defineErrorTemplate = (): void => {
            if (window.innerWidth < 768 || window.innerHeight < 475) {
                setMobileErrorTemplate(true);
            } else if (window.innerWidth > 768 || window.innerHeight > 475) {
                setMobileErrorTemplate(false);
            }
        };

        window.addEventListener('resize', defineErrorTemplate);
        window.addEventListener('load', defineErrorTemplate);
        return () => {
            window.removeEventListener('resize', defineErrorTemplate);
            window.removeEventListener('load', defineErrorTemplate);
        };
    }, []);

    useEffect(() => {
        // logic of disable isFirstPageLoading status
        const validCondition = !isLoading && !isError;

        if (validCondition) {
            setTimeout(() => {
                dispatch(switchFirstPageLoadingStatus(false));
            }, 1300);
        }
    }, [isLoading, isError]);

    useEffect(() => {
        // logic of scroll to last comment
        const validCondition =
            !isFirstPageLoading && !isCommentsDataEmpty && chatBodyRef?.current;

        if (validCondition) {
            setTimeout(() => {
                chatBodyRef.current.scrollTo({
                    top: chatBodyRef.current.scrollHeight,
                    behavior: 'smooth'
                });
            }, 200);
        }
    }, [isCommentCreated, isFirstPageLoading, isCommentsDataEmpty]);

    // /. effects

    return (
        <>
            <ChatHeader
                channelName="NikitosXClub"
                channelMembersCount="1337"
                isError={isError}
                enteredSearchValue={enteredSearchValue}
                setEnteredSearchValue={setEnteredSearchValue}
                isPageInteractive={!isFirstPageLoading}
            />
            <Row className="chat__middle">
                {isFirstPageLoading ? (
                    <Spin
                        size="large"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%,-50%)'
                        }}
                    />
                ) : isError ? (
                    <Col
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}
                    >
                        {isMobileErrorTemplate ? (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                style={{ margin: '0 0 10px 0' }}
                                description={'Sorry, something went wrong.'}
                            />
                        ) : (
                            <Result
                                status="500"
                                title="500"
                                subTitle="Sorry, something went wrong."
                            />
                        )}
                    </Col>
                ) : (
                    <div
                        ref={chatBodyRef}
                        className={`chat__body ${
                            isCommentsDataEmpty ? 'empty' : ''
                        }`}
                    >
                        <ChatGreetingSection channelName="NikitosXClub" />
                        <>
                            {comments.length === 0 ? (
                                <DataPlaceholderMarkup title="no data" />
                            ) : availableItems.length === 0 ? (
                                <DataPlaceholderMarkup title="no matches" />
                            ) : (
                                <MessageList availableItems={availableItems} />
                            )}
                        </>
                    </div>
                )}
            </Row>
            <ChatBottom
                isPageInteractive={!isFirstPageLoading}
                isError={isError}
            />
        </>
    );
};

export default ChatPageFirst;
