export interface Robot {
  _id: string;
  name: string;
  imageUrl: string;
  stats: {
    speed: number;
    endurance: number;
    createAt: number;
  };
}

export interface RobotsState {
  robotsList: Robots;
}

export type Robots = Robot[];
