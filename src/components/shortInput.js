import React from "react";

const ShortInput = React.forwardRef(
  ({ onChange, onBlur, id, label, placeholder, icon, className }, ref) => (
    <div>
      <label htmlFor={id} className="block text-base font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <input
          onChange={onChange}
          onBlur={onBlur}
          type="text"
          ref={ref}
          name={id}
          id={id}
          className={`py-2 px-3 focus:ring focus:border-secondary focus:outline-none flex-1 block w-full rounded-md sm:text-base border-gray-300 border ${className}`}
          placeholder={placeholder || ``}
        />
      </div>
    </div>
  )
);

ShortInput.displayName = "ShortInput";

export default ShortInput;
