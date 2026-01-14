import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const { name, description, key, members } = req.body;

    if (!name || !key) {
      return res.status(400).json({ message: "Name and key are required" });
    }

    
    const existingProject = await Project.findOne({ key });
    if (existingProject) {
      return res.status(409).json({ message: "Project key already exists" });
    }

    const project = await Project.create({
    name: name,
    description: description,
    key: key,
    createdBy: req.user.id,
    members: members
    });


    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
