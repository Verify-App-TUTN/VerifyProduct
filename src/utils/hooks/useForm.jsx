import React, { useState, useEffect } from "react";
import useInput from "./useInput";

const useForm = () => {
  const [state, setState] = useInput();

  useEffect(() => {

  }, [state]);

  return [state, () => {
    
  }];
}

export default useForm;
