import  React ,{ useState } from "react";
import { SelectForm } from "../../components";

const useSelectForm = ({ details, placeholder, label, errorMessage }) => {
  const [state, setState] = useState(placeholder);


  return [state, () => {
    return (
      <SelectForm {...{ setState, state, details, label, errorMessage }} />
    );
  }];
}

export default useSelectForm;
