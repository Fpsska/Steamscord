import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { switchInputStatus } from '../app/store/chatSlice';
import useGetProfileInfoQuery from '../app/api/steamAPI';

export function useData() {
    const { isAuthorized } = useSelector((state) => state.authReducer);
    const { data = [], isLoading, isError } = useGetProfileInfoQuery();

    const dispatch = useDispatch();

    useEffect(() => {
        const validStatus = !isError && !isLoading && isAuthorized;
        validStatus ? dispatch(switchInputStatus(true)) : dispatch(switchInputStatus(false));
    }, [isError, isLoading, isAuthorized]);

    return { data };
}
