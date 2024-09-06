const express = require("express");
const multer = require("multer");
const {
  saveWorkflow,
  getWorkflows,
  executeWorkflow,
} = require("./controllers/workflowController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Routes
router.post("/save", saveWorkflow);
router.get("/", getWorkflows);
router.post("/execute", upload.single("file"), executeWorkflow);

module.exports = router;
