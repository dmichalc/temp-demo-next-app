import React, { useState } from "react";

export const Test = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {isOpen ? "True" : "False"}
      <div>
        <button onClick={() => setOpen(!isOpen)}>click me!</button>
      </div>
    </div>
  );
};