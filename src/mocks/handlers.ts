import { rest } from "msw";
import mockRobotsList from "./mocksRobots";

const apiUrl = process.env.REACT_APP_API_URL as string;

export const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRobotsList));
  }),
];
