//region imports
import express    from 'express';
import bodyParser from 'body-parser';
import cors       from 'cors'
import mongoose   from 'mongoose'
//endregion
 


const
	app = express();

//middleware
app.use(bodyParser.json());
app.use(cors())

//db connection
mongoose.connect('mongodb://localhost:27017/memez', {
	useNewUrlParser: true, useUnifiedTopology: true

}).then(()=>{
    console.log('successfully connected to mongoDB');
})

export {app}



