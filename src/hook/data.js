import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { switchInputStatus } from "../app/store/chatSlice"
import useGetProfileInfoQuery from "../app/api/steamAPI"



const useData = () => {
    const { data = [], isLoading, isError } = useGetProfileInfoQuery();
    const dispatch = useDispatch()

    const DefineInputStatus = () => {
        if (isError === true) {
            dispatch(switchInputStatus(false))
        }
    };

    useEffect(() => {
        DefineInputStatus()
    })

    return {
        data,
        isLoading,
        isError
    };
}

export default useData;