import React, { useRef } from 'react';

import { Row, message } from 'antd';

import { BsMic, BsEmojiSmile, BsPaperclip } from 'react-icons/bs';

import { useAppSelector } from 'app/hooks';

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
    const { isUserAuthorized } = useAppSelector(state => state.authReducer);

    const formRef = useRef<HTMLFormElement>(null!);

    // /. hooks

    const errorNotification = (): void => {
        message.error('Function temporarily unavailable');
    };

    const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        //
        formRef.current.reset();
    };

    // /. functions

    return (
        <Row className="chat__section chat__section--bottom">
            <form
                className="form form--message"
                ref={formRef}
                onSubmit={e => onFormSubmit(e)}
                action="#"
            >
                <input
                    className="form__input form__input--message"
                    type="text"
                    placeholder="Message in #general"
                    disabled={
                        !isUserAuthorized || !isPageInteractive || isError
                    }
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
