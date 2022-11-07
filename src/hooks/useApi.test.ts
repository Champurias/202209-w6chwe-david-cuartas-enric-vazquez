import { renderHook } from "@testing-library/react";
import mockRobotsList from "../mocks/mocksRobots";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice";
import { store } from "../redux/store";
import storeWrapper from "../utils/storeWrapper";
import useApi from "./useApi";

describe("Given a useApi custom hook", () => {
  describe("When it invokes it's loadRobotsApi function", () => {
    test("Then it should call dispatch with loadRobots action with robot list", async () => {
      const dispatchSpy = jest.spyOn(store, "dispatch");
      const { result } = renderHook(() => useApi(), {
        wrapper: storeWrapper,
      });
      const loadRobotsAction = loadRobotsActionCreator(mockRobotsList);

      await result.current.loadRobotsApi();

      expect(dispatchSpy).toHaveBeenCalledWith(loadRobotsAction);
    });
  });
});
