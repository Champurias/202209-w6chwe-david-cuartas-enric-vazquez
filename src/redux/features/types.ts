export interface Robot {
  id: string;
  name: string;
  imageUrl: string;
  stats: {
    speed: number;
    endurenace: number;
    createAt: number;
  };
}

export interface RobotsState {
  robotsList: Robots;
}

export type Robots = Robot[];
