import React from "react";

const FilterNode = () => (
  <div style={{ padding: 10, backgroundColor: "#FFCC00" }}>Filter Node</div>
);

const WaitNode = () => (
  <div style={{ padding: 10, backgroundColor: "#FF9999" }}>Wait Node</div>
);

const ConvertNode = () => (
  <div style={{ padding: 10, backgroundColor: "#99CCFF" }}>Convert Node</div>
);

const PostNode = () => (
  <div style={{ padding: 10, backgroundColor: "#99FF99" }}>POST Node</div>
);

export { FilterNode, WaitNode, ConvertNode, PostNode };
