import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { Robots } from "../../redux/features/types";
import { useAppSelector } from "../../redux/hooks";
import RobotCard from "../RobotCard/RobotCard";
import StyledRobotList from "./StyledRobotList";

const RobotList = (): JSX.Element => {
  const robots: Robots = useAppSelector((state) => state.robots.robotsList);
  const { loadRobotsApi } = useApi();

  useEffect(() => {
    loadRobotsApi();
  }, [loadRobotsApi]);

  return (
    <StyledRobotList>
      {robots.map((robot) => (
        <li>
          <RobotCard robot={robot} />
        </li>
      ))}
    </StyledRobotList>
  );
};

export default RobotList;
