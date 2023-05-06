import React, { useRef } from 'react';

import { message, Modal } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

import {
    MdOutlineAddReaction,
    MdOutlineModeEditOutline,
    MdOutlineReply,
    MdOutlineMoreHoriz
} from 'react-icons/md';

import { IoTrashOutline } from 'react-icons/io5';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchEditingMessageStatus,
    deleteSpecificMessage,
    switchReactionEmojiPickerVisibleStatus,
    setNewReactionEmojiPickerPosition
} from 'app/slices/profileSlice';

import MessageTemplate from '../MessageTemplate';

import './message-context.scss';

// /. imports

interface propTypes {
    messageID: string;
    isEditable?: boolean;
}

// /. interfaces

const MessageContextMenu: React.FC<propTypes> = ({ messageID, isEditable }) => {
    const { messages } = useAppSelector(state => state.profileReducer);

    const [modal, contextHolder] = Modal.useModal();

    const dispatch = useAppDispatch();
    const contextMenuRef = useRef<HTMLUListElement>(null!);

    // /. hooks

    const iconProperties: { [key: string]: string } = {
        size: '22',
        color: '#928e8e'
    };

    // /. variables

    const onEditButtonClick = (): void => {
        dispatch(
            switchEditingMessageStatus({
                payloadID: messageID,
                status: true
            })
        );
    };

    const onAcceptButtonAction = (): void => {
        dispatch(
            deleteSpecificMessage({
                payloadID: messageID
            })
        );
        setTimeout(() => {
            message.success('Message was deleted');
        }, 500);
    };

    const onDeleteButtonClick = (): void => {
        const messageToDelete = messages.find(
            message => message.id === messageID
        );

        modal.confirm({
            title: 'Delete the message',
            icon: <ExclamationCircleOutlined />,
            content: (
                <div className="modal-confirm">
                    <p>Are you sure to delete your message</p>
                    <div className="modal-confirm__body">
                        {messageToDelete && (
                            <MessageTemplate
                                time={messageToDelete.dateOfCreate}
                                {...messageToDelete}
                            />
                        )}
                    </div>
                </div>
            ),
            okText: 'OK',
            cancelText: 'Cancel',
            onOk: onAcceptButtonAction
        });
    };

    const onReactionButtonClick = (): void => {
        dispatch(switchReactionEmojiPickerVisibleStatus(true));
        computeNewEmojiPickerPostition();
    };

    const computeNewEmojiPickerPostition = (): void => {
        const messageTemplate = contextMenuRef.current.parentElement;
        const messageTemplateOffsetTop = messageTemplate?.offsetTop;

        const chatBody = messageTemplate?.parentElement?.parentElement;

        if (messageTemplateOffsetTop && chatBody) {
            const chatBodyScrollHeight = chatBody.scrollHeight;
            const emojiPickerHeight = 320;

            if (
                messageTemplateOffsetTop + emojiPickerHeight >
                chatBodyScrollHeight
            )
                dispatch(
                    setNewReactionEmojiPickerPosition(
                        messageTemplateOffsetTop - 305
                    )
                );
            else {
                dispatch(
                    setNewReactionEmojiPickerPosition(
                        messageTemplateOffsetTop - 15
                    )
                );
            }
        }
    };

    // /. functions

    return (
        <>
            {contextHolder}
            {/*  /. confirm modal content */}
            <ul
                ref={contextMenuRef}
                className="message-context"
            >
                <li
                    className="message-context__template"
                    data-action="add reaction"
                >
                    <button
                        className="message-context__button"
                        aria-label="add reaction"
                        type="button"
                        onClick={onReactionButtonClick}
                    >
                        <MdOutlineAddReaction
                            size={iconProperties.size}
                            color={iconProperties.color}
                        />
                    </button>
                </li>
                <li
                    className="message-context__template"
                    data-action="reply"
                >
                    <button
                        className="message-context__button"
                        aria-label="reply to message"
                        type="button"
                    >
                        <MdOutlineReply
                            size={iconProperties.size}
                            color={iconProperties.color}
                        />
                    </button>
                </li>
                <>
                    {isEditable && (
                        <>
                            <li
                                className="message-context__template"
                                data-action="edit"
                            >
                                <button
                                    className="message-context__button"
                                    aria-label="edit message body"
                                    type="button"
                                    onClick={onEditButtonClick}
                                >
                                    <MdOutlineModeEditOutline
                                        size={iconProperties.size}
                                        color={iconProperties.color}
                                    />
                                </button>
                            </li>
                            <li
                                className="message-context__template message-context__template_delete"
                                data-action="delete"
                            >
                                <button
                                    className="message-context__button"
                                    aria-label="delete message body"
                                    type="button"
                                    onClick={onDeleteButtonClick}
                                >
                                    <IoTrashOutline
                                        size={iconProperties.size}
                                        color={iconProperties.color}
                                    />
                                </button>
                            </li>
                        </>
                    )}
                </>
                <li
                    className="message-context__template"
                    data-action="more"
                >
                    <button
                        className="message-context__button"
                        aria-label="show more actions"
                        type="button"
                    >
                        <MdOutlineMoreHoriz
                            size={iconProperties.size}
                            color={iconProperties.color}
                        />
                    </button>
                </li>
            </ul>
        </>
    );
};

export default MessageContextMenu;
