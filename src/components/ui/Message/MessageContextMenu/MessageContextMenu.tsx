import React, { forwardRef, RefObject } from 'react';

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
    switchEmojiPickerVisibleStatus,
    setCurrentMessageID,
    setEmojiPickerRole
} from 'app/slices/profileSlice';

import MessageTemplate from '../MessageTemplate';

import './message-context.scss';

// /. imports

interface propTypes {
    messageID: string;
    isEditable?: boolean;
    messageRef: RefObject<HTMLDivElement>;
    computeEmojiPickerPosition: (
        arg1: RefObject<HTMLDivElement>,
        arg2: any,
        arg3: number,
        arg4: number,
        arg5: number
    ) => void;
}

// /. interfaces

const MessageContextMenu = forwardRef<HTMLUListElement, propTypes>(
    (props, ref) => {
        const {
            messageID,
            isEditable,
            messageRef,
            computeEmojiPickerPosition
        } = props;

        const { messages, isEmojiPickerVisible } = useAppSelector(
            state => state.profileReducer
        );

        const [modal, contextHolder] = Modal.useModal();

        const dispatch = useAppDispatch();

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
            !isEmojiPickerVisible &&
                dispatch(switchEmojiPickerVisibleStatus(true));

            computeEmojiPickerPosition(messageRef, ref, 15, 305, 25);
            dispatch(setEmojiPickerRole('reaction'));
            dispatch(setCurrentMessageID(messageID));
        };

        // /. functions

        return (
            <>
                {contextHolder}
                {/*  /. confirm modal content */}
                <ul
                    ref={ref}
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
                                className="message-context__icon"
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
    }
);

MessageContextMenu.displayName = 'MessageContextMenu';

export default MessageContextMenu;
