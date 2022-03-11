import React from "react";

export default function Folders({ folders, parent_id = 0, setData }) {
  const items = folders.filter((folder) => {
    return folder.parent_id === parent_id;
  });
  const handleClick = (id) => {
    const newData = [
      ...folders,
      {
        id: Math.random(),
        name: "new Folder",
        parent_id: id,
      },
    ];
    setData(newData);
  };
  return (
    <div>
      {items.length ? (
        <div>
          {items.map((item) => {
            return (
              <div key={item.id} style={{ marginLeft: "20px" }}>
                <div style={{ display: "flex" }}>
                  <h5>{item.name}</h5>
                  <button
                    onClick={() => handleClick(item.id)}
                    style={{ height: "20px" }}
                  >
                    +
                  </button>
                </div>
                <Folders
                  folders={folders}
                  parent_id={item.id}
                  setData={setData}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
