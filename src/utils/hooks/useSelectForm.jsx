import React, { useState, useEffect } from "react";

const useSelectForm = () => {
  const [state, setState] = useState();

  useEffect(() => {}, [state]);

  return [state];
}

export default useSelectForm;
