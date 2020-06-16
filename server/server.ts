import * as express from 'express';
import { Application } from "express";
import { loginUser } from "./auth.route";
import { getAllProjects } from "./get-projects.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());
app.route('/api/login').post(loginUser);
app.route('/api/projects').get(getAllProjects);

const httpServer: any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
