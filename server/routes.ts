import {postRoutes} from "./posts/routes";
import {Express} from "express";

export function routes(app: Express) {

    postRoutes(app);

}
