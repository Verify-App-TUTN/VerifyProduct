import React, { useState, useEffect } from "react";
import { TextForm } from "../../components";
import { useInput } from "./";

const useForm = ({placeholder,label, errorMessage,type}) => {
  const [state, setState] = useInput();
  return [state, () => {
    return (
              <TextForm {...{placeholder, state, setState, errorMessage, label, type}} />
            )
  }];
}

export default useForm;
