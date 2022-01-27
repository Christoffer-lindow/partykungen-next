const compareProperty = (articleValue, boxValue) => articleValue < boxValue;
const checkDifference = (articleValue, boxValue) => boxValue - articleValue;

const createPropInfo = (prop, articleVariant, box) => {
  return {
    valid: compareProperty(articleVariant[prop], box[prop]),
    difference: checkDifference(articleVariant[prop], box[prop]),
  };
};

export const getPropsInfo = (props, articleVariant, boxes) => {
  const infoMaps = [];
  boxes.forEach((box) => {
    const infoMap = new Map();
    infoMap.set("box", box["box"]);
    props.forEach((prop) => {
      infoMap.set(prop, createPropInfo(prop, articleVariant, box));
    });
    infoMaps.push(infoMap);
  });
  console.log(infoMaps);
  return infoMaps;
};

export const articleFitsInBox = (propsInfo) => {
  for (const [key, value] of propsInfo) {
    if (!value.valid && key !== "box") {
      return {
        box: propsInfo.get("box"),
        valid: false,
      };
    }
  }
  return {
    box: propsInfo.get("box"),
    valid: true,
  };
};
