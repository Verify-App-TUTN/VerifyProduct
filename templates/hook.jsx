import React, { useState, useEffect } from "react";

const blockName = () => {
  const [state, setState] = useState();

  useEffect(() => {}, [state]);

  return [state];
}

export default blockName;
