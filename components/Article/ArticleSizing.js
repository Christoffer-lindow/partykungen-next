import { getBoxValidity, getBoxSizingInfo, props } from "../../utils/boxUtils";
import { ArticleSizingInfo } from "./ArticleSizingInfo";

const ArticleSizing = ({ variantFirstBuyable, boxSizes }) => {
  const boxSizingInfo = getBoxSizingInfo(props, variantFirstBuyable, boxSizes);
  const boxValidities = boxSizingInfo.map((sizingInfo) =>
    getBoxValidity(sizingInfo)
  );
  return (
    <div>
      <div className="flex w-100 justify-between">
        {boxSizingInfo.map((sizingInfo, i) => (
          <div className="w-1/2" key={i}>
            <ArticleSizingInfo
              sizingInfo={sizingInfo}
              valid={boxValidities[i].valid}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSizing;
