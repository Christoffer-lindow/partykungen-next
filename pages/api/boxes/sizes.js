export const getBoxSizes = () => {
  return [
    {
      box: "XS",
      width: 120,
      height: 180,
      depth: 80,
      weight: 5000,
    },
    {
      box: "XXL",
      width: 600,
      height: 600,
      depth: 600,
      weight: 20000,
    },
  ];
};
const handler = (req, res) => res.status(200).json(getBoxSizes());
export default handler;
