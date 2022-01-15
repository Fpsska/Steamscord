import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useGetProfileInfoQuery from "../app/api/steamAPI";
import { switchInputStatus } from "../app/store/chatSlice";

export function withRTK(Component) {
  return function (props) {
    const { data = [], isLoading, error } = useGetProfileInfoQuery();
    const dispatch = useDispatch();
    //
    const DefineInputStatus = () => {};
    if (useGetProfileInfoQuery().status === "fulfilled") {
      dispatch(switchInputStatus(true));
    }
    //
    useEffect(() => {
      DefineInputStatus();
    }, []);
    //
    return <Component data={data} isLoading={isLoading} error={error} />;
  };
}
