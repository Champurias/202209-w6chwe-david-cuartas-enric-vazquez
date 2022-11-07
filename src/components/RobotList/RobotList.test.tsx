import { screen } from "@testing-library/react";
import mockRobotState from "../../mocks/mockRobotsState";
import { renderWithProviders } from "../../utils/test.utils";
import RobotList from "./RobotList";

describe("Given a RobotList component", () => {
  describe("When is is rendered with a list of two robots", () => {
    test("Then it should show a list with two robots card", () => {
      renderWithProviders(<RobotList />, {
        preloadedState: { robots: mockRobotState },
      });

      const listItems = screen.queryAllByRole("listitem");

      expect(listItems.length).toBe(mockRobotState.robotsList.length);
    });
  });
});
