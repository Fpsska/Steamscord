import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { getCurrentUser } from 'app/slices/profileSlice';

// /. imports

interface propTypes {
    id: string;
    name: string;
    image: string;
    status: boolean;
    activity: string;
}

// /. interfaces

const FriendItem: React.FC<propTypes> = ({
    id,
    name,
    image,
    status,
    activity
}) => {
    const { currentUser } = useAppSelector(state => state.profileReducer);

    const [isAlreadyAdded, setAddedStatus] = useState(false);

    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        // restricting db click by same item
        currentUser[0]?.steamid === id
            ? setAddedStatus(true)
            : setAddedStatus(false);
    }, [currentUser, id]);

    // /. effects

    return (
        <li className={`friends__item ${status ? 'online' : ''}`}>
            <img
                className="friends__image"
                src={image}
                alt="profile-avatar"
                onClick={() =>
                    !isAlreadyAdded &&
                    dispatch(getCurrentUser({ payloadID: id }))
                }
            />
            <div className="friends__information">
                <span className="friends__name">{name}</span>
                <span className="friends__activity">{activity}</span>
            </div>
        </li>
    );
};

export default FriendItem;
