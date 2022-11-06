import { Robot } from "../../redux/features/types";
import Button from "../Button/Button";

interface RobotCardProps {
  robot: Robot;
}

const robotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <article className="card">
      <h2 className="card__title">{robot.name}</h2>
      <img
        src={robot.imageUrl}
        alt={`Robot ${robot.name}`}
        height="155"
        width="150"
      />
      <Button text="Modify robot" action={() => {}} />
      <Button text="Delete robot" action={() => {}} />
    </article>
  );
};

export default robotCard;
