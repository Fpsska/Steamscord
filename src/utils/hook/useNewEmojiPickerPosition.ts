import { RefObject, useCallback } from 'react';

import { useAppDispatch } from 'app/hooks';

import { setNewReactionEmojiPickerPosition } from 'app/slices/profileSlice';

// /. imports

export function useNewEmojiPickerPosition(): any {

    const dispatch = useAppDispatch();

    // /. hooks

    const computeNewEmojiPickerPosition = useCallback((messageRef: RefObject<HTMLDivElement>, clickedElementRef: RefObject<any>, minOffsetTop: number, maxOffsetTop: number, offsetRight: number): void => {

        if (!messageRef || !messageRef.current) return;
        const messageTemplateOffsetTop = messageRef.current.offsetTop;
        const chatBody = messageRef.current.parentElement;

        if (!clickedElementRef || !clickedElementRef.current || !chatBody) return;
        const { width } = clickedElementRef.current.getBoundingClientRect();
        const chatBodyScrollHeight = chatBody.scrollHeight;
        const emojiPickerHeight = 320;

        if (
            messageTemplateOffsetTop + emojiPickerHeight >
            chatBodyScrollHeight
        )
            dispatch(
                setNewReactionEmojiPickerPosition({
                    // message = 320 / context = 305
                    top: messageTemplateOffsetTop - maxOffsetTop,
                    right: width + offsetRight
                })
            );
        else {
            dispatch(
                setNewReactionEmojiPickerPosition({
                    // message = 320 / context = 15
                    top: messageTemplateOffsetTop - minOffsetTop,
                    right: width + offsetRight
                })
            );
        }
    }, []);

    return { computeNewEmojiPickerPosition };
}