const compareProperty = (articleValue, boxValue) => articleValue < boxValue;
const checkDifference = (articleValue, boxValue) => boxValue - articleValue;

const createPropInfo = (prop, articleVariant, box) => {
  return {
    prop,
    valid: compareProperty(articleVariant[prop], box[prop]),
    difference: checkDifference(articleVariant[prop], box[prop]),
  };
};

export const getPropsInfo = (props, articleVariant, box) =>
  props.map((prop) => createPropInfo(prop, articleVariant, box));
