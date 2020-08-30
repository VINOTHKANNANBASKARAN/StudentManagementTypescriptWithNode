import express from 'express'
import {json} from "body-parser";
import routes from "./router/router";

const app = express();

app.use(json())
app.use('/student/',routes)

app.listen(3000)

app.use((err:express.Express, req:express.Request, res:express.Response,next:express.NextFunction)=>{
    return res.status(500)
        .json({
            message: 'Error in processing the request'
        })
})

