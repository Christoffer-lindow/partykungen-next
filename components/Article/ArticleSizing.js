import { articleFitsInBox, getPropsInfo, props } from "../../utils/boxUtils";
import { ArticleSizingInfo } from "./ArticleSizingInfo";

const ArticleSizing = ({ variantFirstBuyable, boxSizes }) => {
  const propsInfo = getPropsInfo(props, variantFirstBuyable, boxSizes);
  const fittingBoxes = propsInfo.map((boxInfo) => articleFitsInBox(boxInfo));
  return (
    <div>
      <div className="flex w-100 justify-between">
        {propsInfo.map((info, i) => (
          <div className="w-1/2" key={i}>
            <ArticleSizingInfo propsInfo={info} fits={fittingBoxes[i].valid} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSizing;
