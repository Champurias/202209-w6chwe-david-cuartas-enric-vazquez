import { render, screen } from "@testing-library/react";
import { Robot } from "../../redux/features/types";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("when is rendered with the robot 'Hulio'", () => {
    test("Then it should show  a level 2 heading with 'Hulio and imagen", () => {
      const robot: Robot = {
        id: "",
        name: "Hulio",
        imageUrl: "",
        stats: {
          speed: 3,
          endurenace: 9,
          createAt: 2,
        },
      };
      const expectedProperty = "alt";
      const expectedAlt = `Robot ${robot.name}`;

      render(<RobotCard robot={robot} />);
      const robotCardTitle = screen.queryByRole("heading", {
        name: robot.name,
        level: 2,
      });
      const robotCardImage = screen.queryByRole("img");

      expect(robotCardTitle).toBeInTheDocument();
      expect(robotCardImage).toHaveProperty(expectedProperty, expectedAlt);
    });
  });
});
