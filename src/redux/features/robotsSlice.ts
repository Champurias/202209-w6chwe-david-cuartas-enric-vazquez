import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots, RobotsState } from "./types";

const initialState: RobotsState = {
  robotsList: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots: (currentState, action: PayloadAction<Robots>): RobotsState => ({
      ...currentState,
      robotsList: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

export const robotsReducer = robotsSlice.reducer;
