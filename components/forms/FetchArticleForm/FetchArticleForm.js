import { interpolateAs } from "next/dist/shared/lib/router/router";
import { useState } from "react";
import { useArticle } from "../../../hooks/articles";
import CtaButton from "../../buttons/CtaButton/CtaButton";
import FloatingLabelInput from "../../inputs/TextInput/TextInput";

const FetchArticleForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (isNaN(value)) {
      setFormError("Please use only numbers");
      return false;
    }
    if (value.length < 5) {
      setFormError("An article has atleast 5 characters");
      return false;
    }
    if (value.length > 7) {
      setFormError("An article can have a maximum of 7 characters");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleFetchArticle = async () => {
    if (validateForm()) {
      await onSubmit(value);
    }
  };
  return (
    <>
      <div className="mb-4">{formError}</div>
      <div className="mb-2 w-1/4">
        <FloatingLabelInput
          label="Search article"
          name="hej"
          value={value}
          placeholder=""
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div classNAme="w-1/4">
        <CtaButton onClick={() => handleFetchArticle()}>
          Hämta artikel
        </CtaButton>
      </div>
    </>
  );
};

export default FetchArticleForm;
