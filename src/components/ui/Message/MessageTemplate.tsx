import React, { useState, useEffect, useRef } from 'react';

import placeholderIMG from 'assets/images/profile-main.png';

import { useAppDispatch } from 'app/hooks';

import {
    switchEditingMessageStatus,
    setNewMessageValue
} from 'app/slices/profileSlice';

import CommentContextMenu from './MessageContextMenu/MessageContextMenu';

// /. imports

interface propTypes {
    id: string;
    name: string;
    message: string;
    avatar: string;
    time: string;
    isEditable: boolean;
    isEditing?: boolean;
}

// /. interfaces

const MessageTemplate: React.FC<propTypes> = ({
    id,
    name,
    message,
    avatar,
    time,
    isEditable,
    isEditing
}) => {
    const [inputMessageValue, setInputMessageValue] = useState<string>(message);

    const dispatch = useAppDispatch();
    const inputMessageRef = useRef<HTMLInputElement>(null!);

    // /. hooks

    const onFormMessageSubmit = (e: React.SyntheticEvent, id: string): void => {
        e.preventDefault();
        //

        dispatch(switchEditingMessageStatus({ payloadID: id, status: false }));

        if (!inputMessageValue) {
            // set default input value if submit form with empty input value
            dispatch(setNewMessageValue({ payloadID: id, value: message }));
        }
        dispatch(
            setNewMessageValue({ payloadID: id, value: inputMessageValue })
        );
    };

    // /. functions

    useEffect(() => {
        if (isEditing && inputMessageRef?.current) {
            inputMessageRef.current.focus();
        }
    }, [isEditing]);

    useEffect(() => {
        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            const validCondition = isEditing && e.code === 'Escape';

            if (validCondition) {
                dispatch(
                    dispatch(
                        switchEditingMessageStatus({
                            payloadID: id,
                            status: false
                        })
                    )
                );
                setInputMessageValue(message);
            }
        };

        const onInputOutsideClick = (e: MouseEvent): void => {
            const validCondition =
                isEditing &&
                !inputMessageRef.current.contains(e.target as Node);

            if (validCondition) {
                dispatch(
                    dispatch(
                        switchEditingMessageStatus({
                            payloadID: id,
                            status: false
                        })
                    )
                );
            }
        };

        document.addEventListener('keydown', onDocumentKeyPress);
        document.addEventListener('click', onInputOutsideClick);
        return () => {
            document.removeEventListener('keydown', onDocumentKeyPress);
            document.removeEventListener('click', onInputOutsideClick);
        };
    }, [isEditing, id, message]);

    // /. effects

    return (
        <div className={`messages__template ${isEditing ? 'editable' : ''}`}>
            <img
                className="messages__profile-image"
                src={avatar || placeholderIMG}
                alt="profile-avatar"
            />
            <div className="messages__content">
                <div className="messages__information">
                    <span className="messages__name">{name}</span>
                    <span className="messages__time">{time}</span>
                    <b>{id}</b>
                </div>
                <>
                    {isEditing ? (
                        <form
                            className="messages__form"
                            onSubmit={e => onFormMessageSubmit(e, id)}
                            action="#"
                        >
                            <input
                                ref={inputMessageRef}
                                className="messages__input"
                                type="text"
                                value={inputMessageValue}
                                onChange={e =>
                                    setInputMessageValue(e.target.value.trim())
                                }
                            />
                        </form>
                    ) : (
                        <p className="messages__text">{message}</p>
                    )}
                </>
            </div>
            <>
                {!isEditing && (
                    <CommentContextMenu
                        messageID={id}
                        isEditable={isEditable}
                    />
                )}
            </>
        </div>
    );
};

export default MessageTemplate;
