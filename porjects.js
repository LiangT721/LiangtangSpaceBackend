const MongoClient = require('mongodb').MongoClient;

const url =
  "mongodb+srv://liangtangspaceUser:Mx2XVPiJSYfKcUUE@liangtangspace.t5eailr.mongodb.net/personalFiles?retryWrites=true&w=majority";

const createProject = async (req, res, next) => {
  const newProject = {
    name: req.body.name,
    description: req.body.description,
    language: req.body.language,
    image: req.body.image,
    url: req.body.url,
    github: req.body.github,
    portfolio: req.body.portfolio
  };

  const client = new MongoClient(url);


  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("projects").insertOne(newProject);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();
  res.json(newProject)
};

const getProjects = async (req, res, next) => {
  const client = new MongoClient(url);
  let projects;

  try {
    await client.connect();
    const db = client.db();
    projects = await db.collection("projects").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();
  res.json(projects)


};

exports.createProject = createProject;
exports.getProjects = getProjects;
