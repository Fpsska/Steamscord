import React, { useState } from 'react';

import { Row, message } from 'antd';

import { BsMic, BsEmojiSmile, BsPaperclip } from 'react-icons/bs';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    createNewMessage,
    switchMessageCreatedStatus,
    switchChatEmojiPickerVisibleStatus
} from 'app/slices/profileSlice';

import EmojiPickerWrapper from 'components/ui/EmojiPicker/EmojiPicker';

import { generateUniqueID } from 'utils/helpers/generateUniqueID';

import { Imessage } from 'types/profileSliceTypes';

// /. imports

interface propTypes {
    isPageInteractive?: boolean;
    isError?: boolean;
}

// /. interfaces

const ChatBottom: React.FC<propTypes> = ({
    isPageInteractive = false,
    isError
}) => {
    const { isUserAuthorized, login } = useAppSelector(
        state => state.authReducer
    );
    const { isMessageCreated, isChatEmojiPickerVisible } = useAppSelector(
        state => state.profileReducer
    );

    const [inputMessageValue, setInputMessageValue] = useState<string>('');

    const dispatch = useAppDispatch();

    // /. hooks

    const isInputDisabled = !isUserAuthorized || !isPageInteractive || isError;

    // /. variables

    const errorNotification = (): void => {
        message.error('Function temporarily unavailable');
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        //
        const newMessage: Imessage = {
            id: generateUniqueID(),
            name: login,
            message: inputMessageValue.trim(),
            avatar: '',
            dateOfCreate: new Date()
                .toLocaleDateString('en-GB', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
                .toUpperCase(),
            isEditable: true,
            isEditing: false
        };
        dispatch(createNewMessage({ message: newMessage }));

        dispatch(switchMessageCreatedStatus(!isMessageCreated));
        setInputMessageValue('');
    };

    // /. functions

    return (
        <Row className="chat__bottom">
            <form
                className="form form--message"
                onSubmit={e => inputMessageValue && onFormSubmit(e)}
                action="#"
            >
                <input
                    className="form__input form__input--message"
                    type="text"
                    placeholder="Message in #general"
                    disabled={isInputDisabled}
                    value={inputMessageValue}
                    onChange={e => setInputMessageValue(e.target.value)}
                />
                <div className="form__interaction">
                    <button
                        type="button"
                        className="form__button form__button--message form__button--voice"
                        onClick={errorNotification}
                    >
                        <BsMic
                            size={20}
                            color={'#b5b5b5'}
                        />
                    </button>
                    <button
                        type="button"
                        className="form__button form__button--message form__button--file"
                        onClick={errorNotification}
                    >
                        <BsPaperclip
                            size={20}
                            color={'#b5b5b5'}
                        />
                    </button>
                </div>
                <button
                    type="button"
                    className="form__button form__button--message form__button--emoji"
                    onClick={() =>
                        dispatch(
                            switchChatEmojiPickerVisibleStatus(
                                !isChatEmojiPickerVisible
                            )
                        )
                    }
                >
                    <BsEmojiSmile
                        size={20}
                        color={'#b5b5b5'}
                    />
                </button>
                <>
                    {isChatEmojiPickerVisible && (
                        <EmojiPickerWrapper
                            setInputMessageValue={setInputMessageValue}
                        />
                    )}
                </>
            </form>
        </Row>
    );
};

export default ChatBottom;
