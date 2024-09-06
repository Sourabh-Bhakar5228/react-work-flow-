import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";

const initialNodes = [];
const initialEdges = [];

const WorkflowBuilder = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [workflowName, setWorkflowName] = useState("");

  const onNodesChange = (changes) =>
    setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const handleSaveWorkflow = async () => {
    try {
      const response = await axios.post("/workflow/save", {
        nodes,
        edges,
        name: workflowName,
      });
      alert("Workflow saved successfully! ID: " + response.data.workflowId);
    } catch (error) {
      console.error("Error saving workflow:", error);
    }
  };

  return (
    <div style={{ height: 600 }}>
      <input
        type="text"
        placeholder="Workflow Name"
        value={workflowName}
        onChange={(e) => setWorkflowName(e.target.value)}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <button onClick={handleSaveWorkflow}>Save Workflow</button>
    </div>
  );
};

export default WorkflowBuilder;
