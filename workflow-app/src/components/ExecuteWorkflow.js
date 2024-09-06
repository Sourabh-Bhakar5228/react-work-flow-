import React, { useState, useEffect } from "react";
import axios from "axios";

const ExecuteWorkflow = () => {
  const [workflows, setWorkflows] = useState([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState("");
  const [csvFile, setCsvFile] = useState(null);

  useEffect(() => {
    // Fetch workflows from backend
    const fetchWorkflows = async () => {
      try {
        const response = await axios.get("/workflow");
        setWorkflows(response.data);
      } catch (error) {
        console.error("Error fetching workflows:", error);
      }
    };
    fetchWorkflows();
  }, []);

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleWorkflowExecution = async () => {
    if (!csvFile || !selectedWorkflow) {
      alert("Please select a workflow and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", csvFile);
    formData.append("workflowId", selectedWorkflow);

    try {
      const response = await axios.post("/workflow/execute", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Workflow executed:", response.data);
      alert("Workflow executed successfully!");
    } catch (error) {
      console.error("Error executing workflow:", error);
    }
  };

  return (
    <div>
      <h2>Execute Workflow</h2>
      <label htmlFor="workflowSelect">Select Workflow: </label>
      <select
        id="workflowSelect"
        value={selectedWorkflow}
        onChange={(e) => setSelectedWorkflow(e.target.value)}
      >
        <option value="">-- Select Workflow --</option>
        {workflows.map((workflow) => (
          <option key={workflow._id} value={workflow._id}>
            {workflow.name}
          </option>
        ))}
      </select>

      <br />
      <label htmlFor="csvFile">Upload CSV: </label>
      <input
        type="file"
        id="csvFile"
        onChange={handleFileChange}
        accept=".csv"
      />

      <br />
      <button onClick={handleWorkflowExecution}>Execute</button>
    </div>
  );
};

export default ExecuteWorkflow;
