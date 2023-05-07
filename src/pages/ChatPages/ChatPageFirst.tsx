import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { Row, Col, Spin, Result, Empty } from 'antd';

import MessageList from 'components/ui/Message/MessageList';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { switchFirstPageLoadingStatus } from 'app/slices/mainSlice';
import { switchEmojiPickerVisibleStatus } from 'app/slices/profileSlice';

import { useFilter } from 'utils/hook/useFilter';

import ChatHeader from 'components/layout/Chat/ChatHeader';
import ChatBottom from 'components/layout/Chat/ChatBottom';

import DataPlaceholderMarkup from 'components/ui/DataPlaceholderMarkup/DataPlaceholderMarkup';
import ChatGreetingSection from 'components/layout/Chat/ChatGreetingSection';
import EmojiPickerWrapper from 'components/ui/EmojiPicker/EmojiPicker';

// /. imports

interface propTypes {
    isLoading: boolean;
    isError: boolean;
}

// /. interfaces

const ChatPageFirst: React.FC<propTypes> = props => {
    const { isLoading, isError } = props;

    const { isFirstPageLoading } = useAppSelector(state => state.mainReducer);
    const {
        messages,
        isMessageCreated,
        isEmojiPickerVisible,
        emojiPickerRole,
        reactionEmojiPickerPosition
    } = useAppSelector(state => state.profileReducer);

    const [isMobileErrorTemplate, setMobileErrorTemplate] =
        useState<boolean>(false);

    const { enteredSearchValue, setEnteredSearchValue, availableItems } =
        useFilter(messages, 'name');

    const dispatch = useAppDispatch();

    const chatBodyRef = useRef<HTMLDivElement>(null!);
    const emojiWrapperRef = useRef<HTMLDivElement>(null!);

    // /. hooks

    const isCommentsDataEmpty =
        messages.length === 0 || availableItems.length === 0;

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

    useLayoutEffect(() => {
        // logic of set dynamic position of emoji-picker-wrapper_reactions
        const validCondition =
            isEmojiPickerVisible &&
            emojiWrapperRef?.current &&
            emojiPickerRole === 'reaction';

        if (validCondition) {
            emojiWrapperRef.current.style.setProperty(
                '--topPosition',
                `${reactionEmojiPickerPosition.top}px`
            );
            emojiWrapperRef.current.style.setProperty(
                '--rightPosition',
                `${reactionEmojiPickerPosition.right}px`
            );
        }
    }, [isEmojiPickerVisible, emojiPickerRole, reactionEmojiPickerPosition]);

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
    }, [isMessageCreated, isFirstPageLoading, isCommentsDataEmpty]);

    useEffect(() => {
        // logic of hide emoji-picker components
        if (!isEmojiPickerVisible) return;

        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            const validCondition = e.code === 'Escape';

            validCondition && dispatch(switchEmojiPickerVisibleStatus(false));
        };

        const onInputOutsideClick = (e: any): void => {
            const validElements = [
                '.message-context__template',
                '.message-context__icon',
                '.message-context__icon path',
                '.form__button--message svg',
                '.form__button--message svg path'
            ];
            const emojiPickerEl = emojiWrapperRef.current?.contains(
                e.target as Node
            );

            if (!emojiPickerEl && !e.target.matches(validElements)) {
                dispatch(switchEmojiPickerVisibleStatus(false));
            }
        };

        document.addEventListener('keydown', onDocumentKeyPress);
        document.addEventListener('click', onInputOutsideClick);
        return () => {
            document.removeEventListener('keydown', onDocumentKeyPress);
            document.removeEventListener('click', onInputOutsideClick);
        };
    }, [isEmojiPickerVisible]);

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
                            {messages.length === 0 ? (
                                <DataPlaceholderMarkup title="no data" />
                            ) : availableItems.length === 0 ? (
                                <DataPlaceholderMarkup title="no matches" />
                            ) : (
                                <MessageList availableItems={availableItems} />
                            )}
                        </>
                        <>
                            {isEmojiPickerVisible && (
                                <EmojiPickerWrapper ref={emojiWrapperRef} />
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
