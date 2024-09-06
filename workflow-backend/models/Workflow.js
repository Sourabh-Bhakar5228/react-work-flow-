const mongoose = require("mongoose");

const WorkflowSchema = new mongoose.Schema({
  nodes: [
    {
      id: String,
      type: String, // filter, wait, convert, post
      column: String, // For filter node
      url: String, // For post node
    },
  ],
  edges: Array,
  name: String, // Optional name for the workflow
});

module.exports = mongoose.model("Workflow", WorkflowSchema);
