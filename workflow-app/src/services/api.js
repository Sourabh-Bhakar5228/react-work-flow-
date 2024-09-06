import axios from "axios";

// Save workflow
export const saveWorkflow = (workflow) => {
  return axios.post("/workflow/save", workflow);
};

// Get all workflows
export const getWorkflows = () => {
  return axios.get("/workflow");
};

// Execute workflow
export const executeWorkflow = (formData) => {
  return axios.post("/workflow/execute", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
