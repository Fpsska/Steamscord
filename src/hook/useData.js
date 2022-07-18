import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { switchInputStatus } from "../app/store/chatSlice"
import useGetProfileInfoQuery from "../app/api/steamAPI"

export function useData() {
    const { data = [], isLoading, isError } = useGetProfileInfoQuery();
    const dispatch = useDispatch()

    useEffect(() => {
        isError ? dispatch(switchInputStatus(false)) : dispatch(switchInputStatus(true))
    }, [isError]);

    return {
        data,
        isLoading,
        isError
    };
}
