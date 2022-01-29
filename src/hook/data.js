import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useGetProfileInfoQuery from "../app/api/steamAPI"
import { switchInputStatus } from "../app/store/chatSlice"



const useData = () => {
    const { data = [], isLoading, error } = useGetProfileInfoQuery();
    // const dispatch = useDispatch()
    // const DefineInputStatus = () => {
    //     if (useGetProfileInfoQuery().status === "fulfilled") {
    //         dispatch(switchInputStatus(true));
    //     }
    // };
    //
    // useEffect(() => {
    //     DefineInputStatus();
    // }, []);
    return {
        data,
        isLoading,
        error
    };
}

export default useData;