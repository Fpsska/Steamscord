export function replaceUnicodeEmojiByImage(value: string, role: string): string {
    const unicodePattern =
        /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    const URL = 'https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/';

    const properties: { [key: string]: { [ket: string]: string } } = {
        emoji: {
            width: '25px',
            height: '25px'
        },
        reaction: {
            width: '20px',
            height: '20px'
        }
    };

    const textArray = value.split(unicodePattern); // ['dsfsdf, '😅', 'asd]

    const outputArray = textArray.reduce((acc: string[], emoji: string) => {
        if (unicodePattern.test(emoji)) {
            emoji = `<img
                        class="emoji-image"
                        src=${`${URL}${emoji?.codePointAt(0)?.toString(16)}.svg`}
                        alt="emoji"
                        style="width: ${properties[role].width};
                        height: ${properties[role].height}"
                    />`;
        }
        acc.push(emoji);

        return acc;
    }, []);

    return outputArray.join('');
}