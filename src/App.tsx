import RobotCard from "./components/RobotCard/RobotCard";
import { Robot } from "./redux/features/types";

const App = (): JSX.Element => {
  const robot: Robot = {
    id: "",
    name: "hulio",
    imageUrl: "https://rubik.chegiochi.it/GIO/190/657/8001444066579.jpg",
    stats: {
      speed: 5,
      endurenace: 4,
      createAt: 3,
    },
  };
  return (
    <div className="container">
      <RobotCard robot={robot} />
    </div>
  );
};

export default App;
