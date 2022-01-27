import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const RenderIcon = ({ isOpen, hasError }) => {
  return (
    <span
      className={`z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3`}
    >
      <FontAwesomeIcon
        icon={isOpen ? faBoxOpen : faBox}
        className={
          hasError ? "text-pk-error" : isOpen ? "text-green-500" : "text-black"
        }
      />
    </span>
  );
};

const ArticleInput = ({
  name,
  placeholder,
  label,
  value,
  packageOpen,
  errorText,
  ...rest
}) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch">
      <input
        {...rest}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border focus:outline-none ${
          errorText
            ? "ring-red-500 border-red-500 text-red-500"
            : "ring-pk-blue"
        } focus:ring w-full pr-10`}
      />
      <RenderIcon isOpen={packageOpen} hasError={errorText.length > 0} />
      <div className="text-red-500">{errorText}</div>
    </div>
  );
};
export default ArticleInput;
