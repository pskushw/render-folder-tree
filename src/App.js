import React, { useState } from "react";
import Folders from "./components/Folders";

export default function App() {
  const input = [
    {
      name: "public",
      id: 1,
      parent_id: 0,
    },
    {
      name: "src",
      id: 2,
      parent_id: 0,
    },
    {
      name: "app",
      id: 3,
      parent_id: 2,
    },
    {
      name: "dist",
      id: 4,
      parent_id: 0,
    },
    {
      name: "prod",
      id: 5,
      parent_id: 4,
    },
    {
      name: "prod-pub",
      id: 6,
      parent_id: 5,
    },
    {
      name: "utils.js",
      id: 8,
      parent_id: 5,
    },
  ];
  const [data, setData] = useState(input);
  return (
    <div>
      <Folders folders={data} setData={setData} />
    </div>
  );
}
