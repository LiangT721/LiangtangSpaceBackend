const express = require('express');
const bodyParser = require('body-parser');
const projects = require('./porjects');

const app = express();

app.use(bodyParser.json());

app.post('/projects', projects.createProject);

app.get('/projects', projects.getProjects);

app.listen(3000);
