//region imports
import {postRoutes} from "./posts/routes";
import {Express}    from "express";
import {userRoutes} from "./users/routes";
import {likeRoutes} from "./likes/routes";
//endregion
 

export function routes(app: Express) {

    postRoutes(app);
    userRoutes(app);
    likeRoutes(app);

}
