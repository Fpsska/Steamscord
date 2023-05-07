import React, { useLayoutEffect, useEffect, useRef } from 'react';

import EmojiPicker from 'emoji-picker-react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchEmojiPickerVisibleStatus,
    setMessageTextValue,
    setMessageReactions
} from 'app/slices/profileSlice';

import './emoji-picker.scss';

// /. imports

const EmojiPickerWrapper: React.FC = () => {
    const {
        isEmojiPickerVisible,
        reactionEmojiPickerPosition,
        currentMessageID,
        messages,
        messageTextValue,
        emojiPickerRole
    } = useAppSelector(state => state.profileReducer);

    const dispatch = useAppDispatch();
    const emojiWrapperRef = useRef<any>(null!);

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

    useLayoutEffect(() => {
        // logic of set dynamic position of emoji-picker-wrapper_reactions
        const validCondition = emojiWrapperRef.current.classList.contains(
            'emoji-picker-wrapper_reactions'
        );
        if (validCondition) {
            emojiWrapperRef.current.style.setProperty(
                '--topPosition',
                `${reactionEmojiPickerPosition.top}px`
            );
            emojiWrapperRef.current.style.setProperty(
                '--rightPosition',
                `${reactionEmojiPickerPosition.right}px`
            );
        }
    }, [reactionEmojiPickerPosition]);

    useEffect(() => {
        // logic of hide emoji-picker components
        if (!isEmojiPickerVisible) return;

        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            const validCondition = e.code === 'Escape';

            validCondition && dispatch(switchEmojiPickerVisibleStatus(false));
        };

        const onInputOutsideClick = (e: any): void => {
            const validCondition = !emojiWrapperRef.current?.contains(
                e.target as Node
            );

            validCondition && dispatch(switchEmojiPickerVisibleStatus(false));
        };

        document.addEventListener('keydown', onDocumentKeyPress);
        document.addEventListener('click', onInputOutsideClick);
        return () => {
            document.removeEventListener('keydown', onDocumentKeyPress);
            document.removeEventListener('click', onInputOutsideClick);
        };
    }, [isEmojiPickerVisible]);

    // /. effects

    return (
        <div
            ref={emojiWrapperRef}
            className={
                emojiPickerRole === 'emoji'
                    ? 'emoji-picker-wrapper'
                    : 'emoji-picker-wrapper_reactions'
            }
        >
            <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default EmojiPickerWrapper;
