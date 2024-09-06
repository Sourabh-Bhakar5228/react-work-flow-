import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WorkflowBuilder from "./components/WorkflowBuilder";
import ExecuteWorkflow from "./components/ExecuteWorkflow";

function App() {
  return (
    <Router>
      <div>
        <h1>Workflow Builder and Executor</h1>
        <Routes>
          <Route path="/" element={<WorkflowBuilder />} />
          <Route path="/execute" element={<ExecuteWorkflow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
