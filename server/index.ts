import {app} from './app'
import {postRoutes} from "./posts/routes";
import {routes} from "./routes";

const port = process.env.PORT || 4000;

routes(app)


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
