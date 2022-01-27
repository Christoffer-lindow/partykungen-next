const checkDimension = (articleValue, boxValue) => articleValue < boxValue;
const checkDifference = (articleValue, boxValue) => boxValue - articleValue;
export const getDimensionInfo = (articleVariant, box) =>
  ["height", "width", "depth", "weight"].map((dimension) => {
    return {
      dimension: dimension,
      valid: checkDimension(articleVariant[dimension], box[dimension]),
      diffrential: checkDifference(articleVariant[dimension], box[dimension]),
    };
  });
