import React, { useLayoutEffect, useEffect, useRef } from 'react';

import EmojiPicker from 'emoji-picker-react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchChatEmojiPickerVisibleStatus,
    switchReactionEmojiPickerVisibleStatus,
    setMessageReactions
} from 'app/slices/profileSlice';

import './emoji-picker.scss';

// /. imports

interface propTypes {
    additionalClass?: string;
    setInputMessageValue?: (arg: any) => void;
}

// /. interfaces

const EmojiPickerWrapper: React.FC<propTypes> = ({
    additionalClass,
    setInputMessageValue
}) => {
    const {
        isChatEmojiPickerVisible,
        reactionEmojiPickerPosition,
        currentMessageID,
        messages
    } = useAppSelector(state => state.profileReducer);

    const dispatch = useAppDispatch();
    const emojiWrapperRef = useRef<any>(null!);

    // /. hooks

    const onEmojiClick = (_: any, emojiObject: any): void => {
        switch (additionalClass) {
            case 'emoji-picker-wrapper_reactions':
                addReactions(emojiObject);
                break;
            default:
                addEmoji(emojiObject);
        }
    };

    const addEmoji = (emojiObject: any): void => {
        dispatch(switchChatEmojiPickerVisibleStatus(false));

        if (setInputMessageValue) {
            setInputMessageValue((prev: string) => prev + emojiObject.emoji);
        }
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

        dispatch(switchReactionEmojiPickerVisibleStatus(false));
    };

    // /. functions

    useLayoutEffect(() => {
        // logic of set dynamic position of emoji-picker-wrapper_reactions
        const validCondition = emojiWrapperRef.current.classList.contains(
            'emoji-picker-wrapper_reactions'
        );
        if (validCondition) {
            // const properties = {
            //     '--topPosition': `${reactionEmojiPickerPosition}px`,
            //     '--rightPosition': `${messageContextMenuWidth}px`
            // };

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
        const onDocumentKeyPress = (e: KeyboardEvent): void => {
            const validCondition =
                isChatEmojiPickerVisible && e.code === 'Escape';

            validCondition &&
                dispatch(switchChatEmojiPickerVisibleStatus(false));
        };

        const onInputOutsideClick = (e: MouseEvent): void => {
            const validCondition =
                isChatEmojiPickerVisible &&
                !emojiWrapperRef.current?.contains(e.target as Node);

            validCondition &&
                dispatch(switchChatEmojiPickerVisibleStatus(false));
        };

        document.addEventListener('keydown', onDocumentKeyPress);
        document.addEventListener('click', onInputOutsideClick);
        return () => {
            document.removeEventListener('keydown', onDocumentKeyPress);
            document.removeEventListener('click', onInputOutsideClick);
        };
    }, [isChatEmojiPickerVisible]);

    // /. effects

    return (
        <div
            ref={emojiWrapperRef}
            className={`emoji-picker-wrapper ${
                additionalClass ? additionalClass : ''
            }`}
        >
            <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default EmojiPickerWrapper;
