import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ArticleNavigation = () => {
  return (
    <div className="w-full flex justify-between mb-8">
      <div>
        <FontAwesomeIcon icon={faArrowLeft} className="mr-4" />
        Previous
      </div>
      <div>
        Next
        <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
      </div>
    </div>
  );
};

export default ArticleNavigation;
