import {app}        from './app'
import {routes}     from "./routes";


const port = process.env.PORT || 3000;

routes(app)


app.listen(port, () => {
	console.log(`App is running on port ${port}`)
})
