import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";
import { Robots, RobotsState } from "./types";

describe("Given the robotsReducer", () => {
  describe("When is is invoked and receives a initial state and loadRobots action payload", () => {
    test("Then should return a new state", () => {
      const expectRobotsList: Robots = [
        {
          id: "",
          name: "",
          imageUrl: "",
          stats: {
            speed: 3,
            endurenace: 3,
            createAt: 2,
          },
        },
      ];
      const expectedState: RobotsState = {
        robotsList: expectRobotsList,
      };

      const initialState: RobotsState = {
        robotsList: [],
      };

      const newStateRobots = robotsReducer(
        initialState,
        loadRobotsActionCreator(expectRobotsList)
      );

      expect(newStateRobots).toStrictEqual(expectedState);
    });
  });
});
