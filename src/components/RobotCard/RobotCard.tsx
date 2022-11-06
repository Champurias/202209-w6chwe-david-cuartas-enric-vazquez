import { Robot } from "../../redux/features/types";
import RobotCardStyled from "./styledRobotCard";

interface RobotCardProps {
  robot: Robot;
}

const robotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled className="card">
      <h2 className="card__title">{robot.name}</h2>
      <img
        src={robot.imageUrl}
        alt={`Robot ${robot.name}`}
        height="155"
        width="150"
      />
    </RobotCardStyled>
  );
};

export default robotCard;
