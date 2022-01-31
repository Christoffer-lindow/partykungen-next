const compareProperty = (articleValue, boxValue) => articleValue < boxValue;
const getDifference = (articleValue, boxValue) => boxValue - articleValue;

const createPropInfo = (prop, articleVariant, box) => {
  return {
    valid: compareProperty(articleVariant[prop], box[prop]),
    difference: getDifference(articleVariant[prop], box[prop]),
  };
};

export const props = ["weight", "width", "depth", "height"];

export const getBoxSizingInfo = (props, articleVariant, boxes) => {
  const infoMaps = [];
  boxes.forEach((box) => {
    const infoMap = new Map();
    infoMap.set("box", box["box"]);
    props.forEach((prop) => {
      infoMap.set(prop, createPropInfo(prop, articleVariant, box));
    });
    infoMap.set("name", articleVariant.belongs_to_product.name);
    infoMaps.push(infoMap);
  });
  return infoMaps;
};

export const getBoxValidity = (propsInfo) => {
  for (const [key, value] of propsInfo) {
    if (!value.valid && key !== "box" && key !== "name") {
      return {
        box: propsInfo.get("box"),
        valid: false,
        productName: propsInfo.get("name"),
      };
    }
  }
  return {
    box: propsInfo.get("box"),
    valid: true,
    productName: propsInfo.get("name"),
  };
};

export const getArticlesThatFitInsideBoxes = (props, articles, boxes) => {
  const returnArticles = [];
  articles
    .map((article) =>
      getBoxSizingInfo(props, article.variant_first_buyable, boxes)
    )
    .forEach((article) =>
      article.forEach((info) => returnArticles.push(getBoxValidity(info)))
    );
  return returnArticles;
};
