import React, { useState, useEffect, useRef } from 'react';

import placeholderIMG from 'assets/images/profile-main.png';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchEditingMessageStatus,
    updateMessageValue
} from 'app/slices/profileSlice';

import { replaceUnicodeEmojiByImage } from 'utils/helpers/replaceUnicodeEmojiByImage';

import { Ireaction } from 'types/profileSliceTypes';

import ReactionsList from '../Reactions/ReactionsList';

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
    reactions: Ireaction[];
}

// /. interfaces

const MessageTemplate: React.FC<propTypes> = ({
    id,
    name,
    message,
    avatar,
    time,
    isEditable,
    isEditing,
    reactions
}) => {
    const [inputMessageValue, setInputMessageValue] = useState<string>(message);

    const dispatch = useAppDispatch();
    const messageTemplateRef = useRef<HTMLDivElement>(null!);

    // /. hooks

    const onFormMessageSubmit = (e: React.SyntheticEvent, id: string): void => {
        e.preventDefault();
        //

        dispatch(switchEditingMessageStatus({ payloadID: id, status: false }));

        if (!inputMessageValue) {
            // set default input value if submit form with empty input value
            dispatch(updateMessageValue({ payloadID: id, value: message }));
        }
        dispatch(
            updateMessageValue({ payloadID: id, value: inputMessageValue })
        );
    };

    // /. functions

    useEffect(() => {
        if (isEditing && messageTemplateRef?.current) {
            messageTemplateRef.current.focus();
        }
    }, [isEditing]);

    useEffect(() => {
        const triggerInputEditAction = (): void => {
            dispatch(
                dispatch(
                    switchEditingMessageStatus({
                        payloadID: id,
                        status: false
                    })
                )
            );
            setInputMessageValue(message);
        };

        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            const validCondition = isEditing && e.code === 'Escape';

            validCondition && triggerInputEditAction();
        };

        const onInputOutsideClick = (e: MouseEvent): void => {
            const validCondition =
                isEditing &&
                !messageTemplateRef.current.contains(e.target as Node);

            validCondition && triggerInputEditAction();
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
        <div
            ref={messageTemplateRef}
            className={`messages__template ${isEditing ? 'editable' : ''}`}
        >
            <img
                className="messages__profile-image"
                src={avatar || placeholderIMG}
                alt="profile-avatar"
            />
            <div className="messages__content">
                <div className="messages__information">
                    <span className="messages__name">{name}</span>
                    <span className="messages__time">{time}</span>
                    {/* <b>{id}</b> */}
                </div>
                <>
                    {isEditing ? (
                        <form
                            className="messages__form"
                            onSubmit={e => onFormMessageSubmit(e, id)}
                            action="#"
                        >
                            <input
                                className="messages__input"
                                type="text"
                                value={inputMessageValue}
                                onChange={e =>
                                    setInputMessageValue(e.target.value.trim())
                                }
                            />
                        </form>
                    ) : (
                        <p
                            className="messages__text"
                            dangerouslySetInnerHTML={{
                                __html: replaceUnicodeEmojiByImage(
                                    message,
                                    'emoji'
                                )
                            }}
                        >
                            {/* {message} */}
                        </p>
                    )}
                </>
                <>
                    {reactions?.length > 0 && (
                        <ReactionsList reactions={reactions} />
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
