import React from 'react';

import { Empty } from 'antd';

// /. imports

interface propTypes {
    title: string;
    image?: string;
}

// /. interfaces

const DataPlaceholderMarkup: React.FC<propTypes> = ({
    title,
    image = 'small'
}) => {
    const image2name: { [key: string]: React.ReactNode } = {
        big: Empty.PRESENTED_IMAGE_DEFAULT,
        small: Empty.PRESENTED_IMAGE_SIMPLE
    };

    const centeredStyles: { [key: string]: string } = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        margin: '0'
    };

    // /. variables

    return (
        <Empty
            image={image2name[image]}
            description={<span>{title}</span>}
            style={centeredStyles}
        />
    );
};

export default DataPlaceholderMarkup;
