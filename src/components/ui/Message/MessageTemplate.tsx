import React, { useState, useEffect, useRef } from 'react';

import twemoji from 'twemoji';

import { BsEmojiSmile } from 'react-icons/bs';

import { useNewEmojiPickerPosition } from 'utils/hook/useNewEmojiPickerPosition';

import placeholderIMG from 'assets/images/profile-main.png';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    setCurrentMessageID,
    setEmojiPickerRole,
    switchEditingMessageStatus,
    switchEmojiPickerVisibleStatus,
    updateMessageValue
} from 'app/slices/profileSlice';

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

const MessageTemplate: React.FC<propTypes> = props => {
    const {
        id,
        name,
        message,
        avatar,
        time,
        isEditable,
        isEditing,
        reactions
    } = props;

    const { isEmojiPickerVisible } = useAppSelector(
        state => state.profileReducer
    );

    const [inputMessageValue, setInputMessageValue] = useState<string>(message);

    const dispatch = useAppDispatch();
    const messageTemplateRef = useRef<HTMLDivElement>(null!);
    const contextMenuRef = useRef<HTMLUListElement>(null!);
    const buttonEmojiPickerRef = useRef<HTMLButtonElement>(null!);

    const { computeNewEmojiPickerPosition } = useNewEmojiPickerPosition();

    // /. hooks

    const onFormMessageSubmit = (e: React.SyntheticEvent, id: string): void => {
        e.preventDefault();
        //
        console.log('submit');

        dispatch(switchEditingMessageStatus({ payloadID: id, status: false }));

        if (!inputMessageValue) {
            // set default input value if submit form with empty input value
            dispatch(updateMessageValue({ payloadID: id, value: message }));
        }
        dispatch(
            updateMessageValue({
                payloadID: id,
                value: inputMessageValue.trim()
            })
        );
    };

    const onEmojiButtonClick = (): void => {
        !isEmojiPickerVisible && dispatch(switchEmojiPickerVisibleStatus(true));
        dispatch(setEmojiPickerRole('emoji-edit'));
        dispatch(setCurrentMessageID(id));

        computeNewEmojiPickerPosition(
            messageTemplateRef,
            buttonEmojiPickerRef,
            320,
            320,
            -26
        );
    };

    // /. functions

    useEffect(() => {
        if (isEditing && messageTemplateRef?.current) {
            messageTemplateRef.current.focus();
        }
    }, [isEditing]);

    useEffect(() => {
        if (!isEditing) return;

        const triggerInputEditAction = (): void => {
            dispatch(
                switchEditingMessageStatus({
                    payloadID: id,
                    status: false
                })
            );
            setInputMessageValue(message);
        };

        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            const validCondition = e.code === 'Escape';

            validCondition && triggerInputEditAction();
        };

        const onInputOutsideClick = (e: MouseEvent): void => {
            const validCondition = !messageTemplateRef.current?.contains(
                e.target as Node
            );

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
                        <>
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
                                        setInputMessageValue(e.target.value)
                                    }
                                />
                                <button
                                    ref={buttonEmojiPickerRef}
                                    className="messages__button"
                                    type="button"
                                    aria-label="add emoji"
                                    onClick={onEmojiButtonClick}
                                >
                                    <BsEmojiSmile
                                        className="form__button-icon"
                                        size={20}
                                        color={'#b5b5b5'}
                                    />
                                </button>
                            </form>
                            <p className="messages__clue">
                                <span>escape</span> to cancel /{' '}
                                <span>enter</span> to save
                            </p>
                        </>
                    ) : (
                        <p
                            className="messages__text"
                            dangerouslySetInnerHTML={{
                                __html: twemoji.parse(message, {
                                    folder: 'svg',
                                    ext: '.svg'
                                })
                            }}
                        ></p>
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
                        messageRef={messageTemplateRef}
                        ref={contextMenuRef}
                        computeEmojiPickerPosition={
                            computeNewEmojiPickerPosition
                        }
                    />
                )}
            </>
        </div>
    );
};

export default MessageTemplate;
