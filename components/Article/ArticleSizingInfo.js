const InfoRow = ({ name, prop, dividend, unit }) => {
  const { valid, difference } = prop;
  const prefix = valid ? "+" : "-";
  return (
    <div className="w-full flex justify-between">
      <div className="">
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className="">
        <div>
          {prefix} {Math.abs(difference / dividend)} {unit}
        </div>
      </div>
    </div>
  );
};

export const ArticleSizingInfo = ({ propsInfo, fits }) => {
  const width = propsInfo.get("width");
  const height = propsInfo.get("height");
  const depth = propsInfo.get("depth");
  const weight = propsInfo.get("weight");
  const box = propsInfo.get("box");

  return (
    <div className={`${fits ? "bg-green-400" : "bg-red-500"} p-6 h-48`}>
      <h1 className="text-white text-2xl mb-2">Type: {box}</h1>
      <InfoRow name="Width" prop={width} dividend={10} unit="cm" />
      <InfoRow name="Height" prop={height} dividend={10} unit="cm" />
      <InfoRow name="Depth" prop={depth} dividend={10} unit="cm" />
      <InfoRow name="Weight" prop={weight} dividend={10} unit="gram" />
    </div>
  );
};
