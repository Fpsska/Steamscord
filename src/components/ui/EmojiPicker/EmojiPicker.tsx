import React, { forwardRef } from 'react';

import EmojiPicker from 'emoji-picker-react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchEmojiPickerVisibleStatus,
    setMessageTextValue,
    setMessageReactions,
    updateMessageValue
} from 'app/slices/profileSlice';

import './emoji-picker.scss';

// /. imports

const EmojiPickerWrapper = forwardRef<HTMLDivElement>((_, ref) => {
    const { currentMessageID, messages, messageTextValue, emojiPickerRole } =
        useAppSelector(state => state.profileReducer);

    const dispatch = useAppDispatch();

    // /. hooks

    const emojiPickerClasses: { [key: string]: string } = {
        emoji: 'emoji-picker-wrapper',
        reaction: 'emoji-picker-wrapper_reactions',
        'emoji-edit': 'emoji-picker-wrapper_edit'
    };

    // /. variables

    const onEmojiClick = (_: any, emojiObject: any): void => {
        switch (emojiPickerRole) {
            case 'reaction':
                addReactions(emojiObject);
                break;
            case 'emoji-edit':
                addEmojiOfEditMode(emojiObject);
                break;
            default:
                addEmoji(emojiObject);
        }
    };

    const addEmojiOfEditMode = (emojiObject: any): void => {
        const { emoji } = emojiObject;

        const message = messages.find(({ id }) => id === currentMessageID);

        if (message) {
            dispatch(
                updateMessageValue({
                    payloadID: message.id,
                    value: message.message + emoji
                })
            );
        }

        dispatch(switchEmojiPickerVisibleStatus(false));
    };

    const addEmoji = (emojiObject: any): void => {
        const { emoji, originalUnified } = emojiObject;
        // console.log(emojiObject);
        dispatch(setMessageTextValue(messageTextValue + emoji));
        dispatch(switchEmojiPickerVisibleStatus(false));
    };

    const addReactions = (emojiObject: any): void => {
        const { unified, emoji } = emojiObject;

        const message = messages.find(({ id }) => id === currentMessageID);

        const isEmojiAlreadyExist = message?.reactions.find(
            ({ id }) => id === unified
        );

        !isEmojiAlreadyExist &&
            dispatch(
                setMessageReactions({
                    payloadID: currentMessageID,
                    reation: {
                        id: unified,
                        emoji: emoji
                    }
                })
            );

        dispatch(switchEmojiPickerVisibleStatus(false));
    };

    // /. functions

    return (
        <div
            ref={ref}
            className={emojiPickerClasses[emojiPickerRole]}
        >
            <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
    );
});

EmojiPickerWrapper.displayName = 'EmojiPickerWrapper';

export default EmojiPickerWrapper;
