const HistoryItem = ({ item, onClick }) => (
  <div
    className={`${
      item.valid ? "bg-green-500" : "bg-pk-error"
    } flex w-100 justify-between items-center py-2 `}
    onClick={onClick}
  >
    <div className={"mx-2"}>{item.productName}</div>
  </div>
);

export default HistoryItem;
