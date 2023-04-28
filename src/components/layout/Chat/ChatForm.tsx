import React, { useState } from 'react';

import { Row, message } from 'antd';

import { BsMic, BsEmojiSmile, BsPaperclip } from 'react-icons/bs';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    createNewComment,
    switchCommentCreatedStatus
} from 'app/slices/profileSlice';

import { generateUniqueID } from 'utils/helpers/generateUniqueID';

import { Icomment } from 'types/profileSliceTypes';

// /. imports

interface propTypes {
    isPageInteractive?: boolean;
    isError?: boolean;
}

// /. interfaces

const ChatForm: React.FC<propTypes> = ({
    isPageInteractive = false,
    isError
}) => {
    const { isUserAuthorized, login } = useAppSelector(
        state => state.authReducer
    );
    const { isCommentCreated } = useAppSelector(state => state.profileReducer);

    const [inputMessageValue, setInputMessageValue] = useState<string>('');

    const dispatch = useAppDispatch();

    // /. hooks

    const errorNotification = (): void => {
        message.error('Function temporarily unavailable');
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        //
        const newComment: Icomment = {
            id: generateUniqueID(),
            name: login,
            comment: inputMessageValue.trim(),
            avatar: '',
            dateOfCreate: new Date().toLocaleDateString('en-GB')
        };
        dispatch(createNewComment({ comment: newComment }));

        dispatch(switchCommentCreatedStatus(!isCommentCreated));
        setInputMessageValue('');
    };

    // /. functions

    return (
        <Row className="chat__section chat__section--bottom">
            <form
                className="form form--message"
                onSubmit={e => inputMessageValue && onFormSubmit(e)}
                action="#"
            >
                <input
                    className="form__input form__input--message"
                    type="text"
                    placeholder="Message in #general"
                    disabled={
                        !isUserAuthorized || !isPageInteractive || isError
                    }
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
                    onClick={errorNotification}
                >
                    <BsEmojiSmile
                        size={20}
                        color={'#b5b5b5'}
                    />
                </button>
            </form>
        </Row>
    );
};

export default ChatForm;
