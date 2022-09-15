const express = require('express');
const bodyParser = require('body-parser');
const projects = require('./projects');

const app = express();

app.use(bodyParser.json());

app.post('/api/projects', projects.createProject);

app.get('/api/projects', projects.getProjects);

app.listen(3000);
