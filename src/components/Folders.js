import React from "react";

export default function Folders({ folders, parent_id = 0 }) {
  const items = folders.filter((folder) => {
    return folder.parent_id === parent_id;
  });
  return (
    <div>
      {items.length ? (
        <div>
          {items.map((item) => {
            return (
              <div key={item.id} style={{ marginLeft: "20px" }}>
                <h5>{item.name}</h5>
                <Folders folders={folders} parent_id={item.id} />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
