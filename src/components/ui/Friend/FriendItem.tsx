import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { getCurrentUser } from 'app/slices/profileSlice';

// /. imports

interface propTypes {
    id: number;
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
        // check equal items in currentUser[]
        currentUser?.some((item: any) => item.steamid === id)
            ? setAddedStatus(true)
            : setAddedStatus(false);
    }, [currentUser, id]);

    // /. effects

    return (
        <li className="friends__item">
            <img
                className={status ? 'friends__image online' : 'friends__image'}
                src={image}
                alt="profile-avatar"
                // onClick={() => !isAlreadyAdded && dispatch(getCurrentUser(id))}
            />
            <div className="friends__information">
                <span
                    className={
                        status ? 'friends__name online' : 'friends__name'
                    }
                >
                    {name}
                </span>
                <span
                    className={
                        status
                            ? 'friends__activity online'
                            : 'friends__activity'
                    }
                >
                    {activity}
                </span>
            </div>
        </li>
    );
};

export default FriendItem;
