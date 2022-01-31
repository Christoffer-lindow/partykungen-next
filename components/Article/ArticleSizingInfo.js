const InfoRow = ({ name, prop, dividend, unit }) => {
  const { valid, difference } = prop;
  const sufix = valid ? "+" : "-";
  return (
    <div className="w-full flex justify-between">
      <div className="">
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div>
        <div>
          {Math.abs(difference / dividend)} {unit} {sufix}
        </div>
      </div>
    </div>
  );
};

export const ArticleSizingInfo = ({ sizingInfo, valid }) => {
  const width = sizingInfo.get("width");
  const height = sizingInfo.get("height");
  const depth = sizingInfo.get("depth");
  const weight = sizingInfo.get("weight");
  const box = sizingInfo.get("box");

  const lengthUnit = "cm";
  const weightUnit = "g";
  const lengthDividend = 10;
  const weightDividend = 10;

  return (
    <div className={`${valid ? "bg-green-400" : "bg-red-500"} p-6 h-48 w-100`}>
      <h1 className="text-white text-2xl mb-2">Type: {box}</h1>
      <InfoRow
        name="Width"
        prop={width}
        dividend={lengthDividend}
        unit={lengthUnit}
      />
      <InfoRow
        name="Height"
        prop={height}
        dividend={lengthDividend}
        unit={lengthUnit}
      />
      <InfoRow
        name="Depth"
        prop={depth}
        dividend={lengthDividend}
        unit={lengthUnit}
      />
      <InfoRow
        name="Weight"
        prop={weight}
        dividend={weightDividend}
        unit={weightUnit}
      />
    </div>
  );
};
