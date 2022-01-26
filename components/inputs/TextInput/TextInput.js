import { useState } from "react";

function FloatingLabelInput({ name, placeholder, label, value, ...rest }) {
  return (
    <div className="relative border-b-2 focus-within:border-blue-500">
      <input
        {...rest}
        type="text"
        name={name}
        placeholder={placeholder}
        className="block w-full appearance-none focus:outline-none bg-transparent"
        value={value}
      />
      <label for={name} className="absolute top-0 -z-1 duration-300 origin-0">
        {label}
      </label>
    </div>
  );
}
export default FloatingLabelInput;
