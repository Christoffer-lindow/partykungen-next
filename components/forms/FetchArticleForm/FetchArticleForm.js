import { useState } from "react";
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
    if (value.length < 5)
      return setError("An article has atleast 5 characters");
    if (value.length > 7) return setError("Please use only numbers");
    clearError();
    return true;
  };

  const handleChange = (e) => {
    isNaN(e.target.value) ? setError("Please use only numbers") : clearError();
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
    <>
      <div className="mb-4">
        <ArticleInput
          name="article_input"
          value={value}
          placeholder="Search article"
          packageOpen={packageOpen}
          onChange={(e) => handleChange(e)}
          errorText={formError}
        />
      </div>
      <CtaButton
        onClick={() => handleFetchArticle()}
        disabled={loading || formError}
      >
        {loading ? "Loading" : "Fetch article"}
      </CtaButton>
    </>
  );
};

export default FetchArticleForm;
