function CheckBoxes({ data, checked, setChecked }) {
  // Get all descendant IDs of a node
  const getAllChildIds = (node) => {
    let ids = [node.id];
    if (node.children) {
      node.children.forEach((child) => {
        ids = ids.concat(getAllChildIds(child));
      });
    }
    return ids;
  };

  // Determine if all children are checked
  const areAllChildrenChecked = (node) => {
    if (!node.children) return checked[node.id] || false;

    return node.children.every((child) => areAllChildrenChecked(child));
  };

  // Handle checkbox change — affects node and its children
  const handleChange = (e, node) => {
    const isChecked = e.target.checked;
    const idsToUpdate = getAllChildIds(node);

    setChecked((prev) => {
      const updated = { ...prev };
      idsToUpdate.forEach((id) => {
        updated[id] = isChecked;
      });
      return updated;
    });
  };

  return (
    <div>
      {data?.map((node) => {
        const isChecked = areAllChildrenChecked(node);

        return (
          <div key={node.id} className="pl-5">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleChange(e, node)}
              />
              <span>{node.name}</span>
            </label>

            {node.children && (
              <CheckBoxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CheckBoxes;
