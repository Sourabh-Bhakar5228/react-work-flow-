const Workflow = require("../models/Workflow");
const csvtojson = require("csvtojson");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

// Save a workflow
exports.saveWorkflow = async (req, res) => {
  const { nodes, edges, name } = req.body;
  const workflow = new Workflow({ nodes, edges, name });
  try {
    await workflow.save();
    res.json({ workflowId: workflow._id });
  } catch (error) {
    res.status(500).json({ error: "Error saving workflow" });
  }
};

// Get all workflows
exports.getWorkflows = async (req, res) => {
  try {
    const workflows = await Workflow.find();
    res.json(workflows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching workflows" });
  }
};

// Execute a workflow
exports.executeWorkflow = async (req, res) => {
  const workflowId = req.body.workflowId;
  const workflow = await Workflow.findById(workflowId);

  if (!workflow) {
    return res.status(404).send("Workflow not found");
  }

  try {
    // Convert CSV to JSON
    const filePath = path.join(__dirname, "../", req.file.path);
    let data = await csvtojson().fromFile(filePath);

    for (const node of workflow.nodes) {
      switch (node.type) {
        case "filter":
          data = data.map((row) => ({
            ...row,
            [node.column]: row[node.column].toLowerCase(),
          }));
          break;

        case "wait":
          await new Promise((resolve) => setTimeout(resolve, 60000)); // 60-second delay
          break;

        case "post":
          await axios.post(node.url, data);
          break;

        default:
          console.log("Unknown node type:", node.type);
      }
    }

    res.json({ message: "Workflow executed successfully", data });
  } catch (error) {
    res.status(500).json({ error: "Error executing workflow" });
  } finally {
    fs.unlinkSync(req.file.path); // Clean up the uploaded file
  }
};
