import { useState } from "react";
import { formValidations } from "../../../utils/validation";
import CtaButton from "../../buttons/CtaButton/CtaButton";
import ArticleInput from "../../inputs/ArticleInput/ArticleInput";

const FetchArticleForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);
  const [formError, setFormError] = useState("");

  const setError = (error) => {
    setPackageOpen(false);
    setFormError(error);
    return false;
  };

  const clearError = () => setError("");

  const validateForm = () => {
    if (formValidations.shorterThan(value, 5))
      return setError("An article has atleast 5 characters");
    if (formValidations.longerThan(value, 7))
      return setError("An article can not  be longer than 7 characters");
    clearError();
    return true;
  };

  const handleChange = (e) => {
    if (
      !formValidations.isNumeric(e.target.value) &&
      !formValidations.isEmptyString(e.target.value)
    ) {
      setError("Please use only numbers");
    } else {
      clearError();
    }
    setValue(e.target.value);
  };

  const handleFetchArticle = async () => {
    if (validateForm()) {
      setLoading(true);
      setPackageOpen(true);
      await onSubmit(value);
      setLoading(false);
    }
  };
  return (
    <form>
      <div className="mb-4 flex">
        <div className="w-10/12 mr-6">
          <ArticleInput
            name="article_input"
            value={value}
            placeholder="Search article"
            packageOpen={packageOpen}
            onChange={(e) => handleChange(e)}
            errorText={formError}
          />
        </div>
        <div className="w-5/12">
          <CtaButton
            onClick={() => handleFetchArticle()}
            disabled={loading || formError}
          >
            {loading ? "Loading" : "Fetch article"}
          </CtaButton>
        </div>
      </div>
    </form>
  );
};

export default FetchArticleForm;
