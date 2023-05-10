import React from 'react';

import { replaceUnicodeEmojiByImage } from 'utils/helpers/replaceUnicodeEmojiByImage';

// /. imports

const ReactionTemplate: React.FC<{ emoji: string }> = ({ emoji }) => {
    return (
        <li
            className="reactions__template"
            dangerouslySetInnerHTML={{
                __html: replaceUnicodeEmojiByImage(emoji, 'reaction')
            }}
        >
            {/* {emoji} */}
        </li>
    );
};

export default ReactionTemplate;
