import express    from 'express';
import bodyParser from 'body-parser';
import cors       from 'cors'




const
    app = express();

//middleware
app.use(bodyParser.json());
app.use(cors())


export {app}


