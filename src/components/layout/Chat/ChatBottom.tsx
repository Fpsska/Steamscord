import React, { useState, useEffect, useRef } from 'react';

import { Row, message } from 'antd';

import { BsMic, BsEmojiSmile, BsPaperclip } from 'react-icons/bs';

import EmojiPicker from 'emoji-picker-react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    createNewMessage,
    switchMessageCreatedStatus
} from 'app/slices/profileSlice';

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
    const { isMessageCreated } = useAppSelector(state => state.profileReducer);

    const [inputMessageValue, setInputMessageValue] = useState<string>('');
    const [isEmojiPickerVisible, setEmojiPickerVisible] =
        useState<boolean>(false);

    const dispatch = useAppDispatch();
    const emojiWrapperRef = useRef<any>(null!);

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

    const onEmojiClick = (_: any, emojiObject: any): void => {
        setInputMessageValue(prev => prev + emojiObject.emoji);
        setEmojiPickerVisible(false);
    };

    // /. functions

    useEffect(() => {
        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            const validCondition = isEmojiPickerVisible && e.code === 'Escape';

            validCondition && setEmojiPickerVisible(false);
        };

        const onInputOutsideClick = (e: MouseEvent): void => {
            const validCondition =
                isEmojiPickerVisible &&
                !emojiWrapperRef.current?.contains(e.target as Node);

            validCondition && setEmojiPickerVisible(false);
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
                    onClick={() => setEmojiPickerVisible(!isEmojiPickerVisible)}
                >
                    <BsEmojiSmile
                        size={20}
                        color={'#b5b5b5'}
                    />
                </button>
                <>
                    {isEmojiPickerVisible && (
                        <div
                            ref={emojiWrapperRef}
                            className="emoji-picker-wrapper"
                        >
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                        </div>
                    )}
                </>
            </form>
        </Row>
    );
};

export default ChatBottom;
