import { useCallback } from "react";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice";
import { useAppDispatch } from "../redux/hooks";

const useApi = () => {
  const apiUrl = process.env.REACT_APP_API_URL as string;
  const dispatch = useAppDispatch();

  const loadRobotsApi = useCallback(async () => {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Cannot connect to API.");
    }
    const robots = await response.json();

    dispatch(loadRobotsActionCreator(robots));
  }, [apiUrl, dispatch]);

  return { loadRobotsApi };
};

export default useApi;
