import React from 'react';

import twemoji from 'twemoji';

// /. imports

const ReactionTemplate: React.FC<{ emoji: string }> = ({ emoji }) => {
    return (
        <li
            className="reactions__template"
            dangerouslySetInnerHTML={{
                __html: twemoji.parse(emoji, {
                    folder: 'svg',
                    ext: '.svg'
                })
            }}
        ></li>
    );
};

export default ReactionTemplate;
