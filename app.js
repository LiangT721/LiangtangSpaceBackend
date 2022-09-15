const express = require('express');
const bodyParser = require('body-parser');
const projects = require('./projects');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accpet, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.post('/api/projects', projects.createProject);

app.get('/api/projects', projects.getProjects);

app.listen(3000);
