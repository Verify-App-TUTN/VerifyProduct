import { useState } from "react";

const useInput = (initial) => {
  const [state, setState] = useState(initial);
  return [state, (e) => setState(e.target.value)];
}

export default useInput;
