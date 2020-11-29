import express, {Request, Response} from 'express';
import {MOCK_USERS} from '../shared/mock/MOCK_USERS';
import bodyParser from 'body-parser'


const
    app = express();

//middleware
app.use(bodyParser.json());

/*
app.get('/api/users', (req: Request, res: Response) => {
    res.json(MOCK_USERS)
        .end()
})

app.get('/api/users/:id', (req: Request, res: Response) => {
    const found = MOCK_USERS.find(user => user.id === +req.params.id)
    if (!found) {
        return res.status(404).json({msg: `User was not found`})
    }
    return res.json(found)
        .end()
})
*/



export {app}


