import React, { useState, useEffect, useId } from "react";
import { TextForm } from "../../components";
import { useInput } from "./";

const useForm = ({placeholder,label, errorMessage,type}) => {
  const [state, setState] = useInput();
  const id = useId();
  return [state, () => {
    return (
      <TextForm {...{ placeholder, state, setState, errorMessage, label, type, key: label.trim() + id }} />
      
            )
  }];
}

export default useForm;
