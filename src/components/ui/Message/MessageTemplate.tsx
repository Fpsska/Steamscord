import React, { useState, useEffect, useRef } from 'react';

import placeholderIMG from 'assets/images/profile-main.png';

import { useAppDispatch } from 'app/hooks';

import {
    switchEditingMessageStatus,
    setNewCommentValue
} from 'app/slices/profileSlice';

import CommentContextMenu from './MessageContextMenu/MessageContextMenu';

// /. imports

interface propTypes {
    id: string;
    name: string;
    comment: string;
    avatar: string;
    time: string;
    isEditable: boolean;
    isEditing?: boolean;
}

// /. interfaces

const MessageTemplate: React.FC<propTypes> = ({
    id,
    name,
    comment,
    avatar,
    time,
    isEditable,
    isEditing
}) => {
    const [inputMessageValue, setInputMessageValue] = useState<string>(comment);

    const dispatch = useAppDispatch();
    const inputMessageRef = useRef<HTMLInputElement>(null!);

    // /. hooks

    const onFormMessageSubmit = (e: React.SyntheticEvent, id: string): void => {
        e.preventDefault();
        //

        dispatch(switchEditingMessageStatus({ payloadID: id, status: false }));
        dispatch(
            setNewCommentValue({ payloadID: id, value: inputMessageValue })
        );

        if (!inputMessageValue) {
            dispatch(setNewCommentValue({ payloadID: id, value: comment }));
        }
    };

    // /. functions

    useEffect(() => {
        if (isEditing && inputMessageRef?.current) {
            inputMessageRef.current.focus();
        }
    }, [isEditing]);

    useEffect(() => {
        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            if (isEditing && e.code === 'Escape') {
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
        return () => {
            document.removeEventListener('keydown', onDocumentKeyPress);
        };
    }, [isEditing, id]);

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
                        <p className="messages__text">{comment}</p>
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
