import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const { name, description, key, createdBy, members } = req.body;

    if (!name || !key) {
      return res.status(400).json({ message: "Name and key are required" });
    }

    
    const existingProject = await Project.findOne({key});
    if (existingProject) {
      return res.status(409).send({ message: "Project key already exists" });
    }

    const project = await Project.create({
    name: name,
    description: description,
    key: key,
    createdBy: createdBy,
    members: members
    });


    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
};

export const viewProject = async(req, res) => {
  const {key} = req.params;

  if (!key) {
    const allProjects = await Project.find();
    return res.status(200).json(allProjects);
  }

  const findProject = await Project.findOne({key});
  if(findProject){
    res.status(200).send(findProject);
  }else{
    res.status(404).send({message: `Project not found.`});
  }
};

export const updateProject = async (req, res)=>{

    const updateID = req.params.id;
    const newProject = req.body;

    const updated = await Project.findByIdAndUpdate(updateID, newProject, {new: true});
    res.send({message: `Project: ${updated} updated successfully.`});
};

export const deleteProject = async(req, res) =>{

  const deleteID = req.params.id;
  const deleted = await Project.findByIdAndDelete(deleteID);
  res.send({message: `Project: ${deleteID} deleted.`})
}
