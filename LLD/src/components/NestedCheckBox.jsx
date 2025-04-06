import { useState } from "react";
import CheckBoxes from "./CheckBoxes";
import { data } from "./data";

function NestedCheckBox() {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <CheckBoxes data={data} checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default NestedCheckBox;
