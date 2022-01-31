import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useArticle } from "../../hooks/articles";

const Arrow = ({ isPrevious, onClick, disabled }) => {
  const handleOnClick = () => !disabled && onClick();
  return (
    <div
      onClick={handleOnClick}
      className={`${
        disabled ? "text-gray-300" : "text-black hover:cursor-pointer"
      } `}
    >
      {!isPrevious && "Next"}
      <FontAwesomeIcon
        icon={isPrevious ? faArrowLeft : faArrowRight}
        className={`${isPrevious ? "mr-4" : "ml-4"} 
        `}
      />
      {isPrevious && "Previous"}
    </div>
  );
};

const ArticleNavigation = ({ updateArticle }) => {
  const { getCurrentArticle, getArticleByHistoryId } = useArticle();
  const currentArticle = getCurrentArticle();
  const previousArticle = getArticleByHistoryId(currentArticle?.id - 1);
  const nextArticle = getArticleByHistoryId(currentArticle?.id + 1);
  return (
    <div className="w-full flex justify-between items-center mb-8">
      <Arrow
        isPrevious={true}
        disabled={!previousArticle}
        onClick={() => updateArticle(previousArticle)}
      />
      {currentArticle && <div>Article id: {currentArticle.article.id}</div>}
      <Arrow
        isPrevious={false}
        disabled={!nextArticle}
        onClick={() => updateArticle(nextArticle)}
      />
    </div>
  );
};

export default ArticleNavigation;
