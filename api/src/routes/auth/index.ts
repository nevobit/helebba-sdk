import { RouteOptions } from "fastify";
import { loginRoute } from "./login";
import { registerUserRoute } from "./register";
import { loginGoogleRoute } from "./login-google";

export const authRoutes: RouteOptions[] = [
 loginRoute,
 registerUserRoute,
 loginGoogleRoute
];
