import React, { forwardRef } from 'react';

import EmojiPicker from 'emoji-picker-react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchEmojiPickerVisibleStatus,
    setMessageTextValue,
    setMessageReactions
} from 'app/slices/profileSlice';

import './emoji-picker.scss';

// /. imports

const EmojiPickerWrapper = forwardRef<HTMLDivElement>((_, ref) => {
    const { currentMessageID, messages, messageTextValue, emojiPickerRole } =
        useAppSelector(state => state.profileReducer);

    const dispatch = useAppDispatch();

    // /. hooks

    const onEmojiClick = (_: any, emojiObject: any): void => {
        switch (emojiPickerRole) {
            case 'reaction':
                addReactions(emojiObject);
                break;
            default:
                addEmoji(emojiObject);
        }
    };

    const addEmoji = (emojiObject: any): void => {
        dispatch(setMessageTextValue(messageTextValue + emojiObject.emoji));
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
            className={
                emojiPickerRole === 'emoji'
                    ? 'emoji-picker-wrapper'
                    : 'emoji-picker-wrapper_reactions'
            }
        >
            <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
    );
});

EmojiPickerWrapper.displayName = 'EmojiPickerWrapper';

export default EmojiPickerWrapper;
