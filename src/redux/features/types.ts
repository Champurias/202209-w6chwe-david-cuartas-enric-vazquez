export interface Robot {
  name: String;
  imageUrl: String;
  stats: {
    speed: Number;
    endurenace: Number;
    createAt: Number;
  };
}

export interface RobotsState {
  robotsList: Robots;
}

export type Robots = Robot[];
