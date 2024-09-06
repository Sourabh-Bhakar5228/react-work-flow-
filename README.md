React Workflow Builder App
This application allows users to visually create workflows for basic data manipulation tasks using a drag-and-drop interface. Users can create workflows, upload data, and trigger executions, making it easy to automate operations like filtering data, waiting for delays, converting data formats, and sending POST requests.

Table of Contents
Features
Tech Stack
Installation
Usage
Folder Structure
API Endpoints
Contributing
License
Features
Drag-and-drop workflow builder using Reactflow.
Workflow nodes: Filter Data, Wait, Convert Format, and Send POST Request.
Users can save and load workflows with unique IDs.
CSV file upload to execute the workflow.
Backend supports interpreting the workflow, processing data, and sending HTTP requests.
MongoDB integration for storing workflows.
Workflow Nodes
Filter Data: Converts data within a specified column to lowercase.
Wait: Introduces a 60-second delay in the workflow execution.
Convert Format: Transforms data from CSV format to JSON.
Send POST Request: Sends a POST request containing JSON payload to a specified URL.
Tech Stack
Frontend: React.js, Reactflow
Backend: Node.js, Express.js
Database: MongoDB
Deployment: TBD
Installation
Prerequisites
Node.js v16.x or higher
MongoDB
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/Sourabh-Bhakar5228/react-work-flow-.git
Navigate to the backend folder:

bash
Copy code
cd react-work-flow-backend
Install dependencies:

bash
Copy code
npm install
Set up your .env file with your MongoDB URI:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/your-db-name
Start the server:

bash
Copy code
npm start
The server will run at http://localhost:5000.

Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd react-work-flow-frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the React app:

bash
Copy code
npm start
The frontend will run at http://localhost:3000.

Usage
Build a Workflow: Drag and drop the predefined nodes (Filter Data, Wait, Convert Format, Send POST Request) to create your workflow.
Save Workflow: Save the workflow to the database with a unique ID.
Upload CSV File: Navigate to the workflow execution page, upload a CSV file, and select a saved workflow to trigger execution.
Track Progress: The backend will process each node sequentially and display progress in the UI.
Folder Structure
scss
Copy code
react-work-flow-/
│
├── react-work-flow-frontend/   # Frontend (React, Reactflow)
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── react-work-flow-backend/    # Backend (Node.js, Express.js)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── ...
├── .gitignore
├── README.md
└── ...
API Endpoints
POST /api/workflows
Description: Save a new workflow.
Request Body:
json
Copy code
{
  "name": "My Workflow",
  "nodes": [...],
  "edges": [...]
}
Response:
json
Copy code
{
  "id": "unique-workflow-id",
  "message": "Workflow saved successfully"
}
GET /api/workflows
Description: Retrieve all saved workflows.
Response:
json
Copy code
[
  {
    "id": "unique-workflow-id",
    "name": "My Workflow",
    "nodes": [...],
    "edges": [...]
  }
]
POST /api/execute
Description: Execute a workflow by uploading a CSV and selecting a workflow.
Request Body:
workflowId: ID of the workflow
csvFile: The CSV file uploaded
Response:
json
Copy code
{
  "message": "Workflow executed successfully",
  "data": {...}
}
Contributing
Contributions are welcome! Please follow the standard GitHub Flow when contributing to the project.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m "Added feature")
Push to the branch (git push origin feature-branch)
Open a pull request.
License
This project is licensed under the MIT License.
