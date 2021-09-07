import React from "react";

const ShortInput = React.forwardRef(
  ({ onChange, onBlur, id, label, placeholder, icon }, ref) => (
    <div>
      <label htmlFor={id} className="block text-base font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-base">
          {icon}
        </span>
        <input
          onChange={onChange}
          onBlur={onBlur}
          type="text"
          ref={ref}
          name={id}
          id={id}
          className="py-2 px-3 focus:ring-primary focus:border-primary flex-1 block w-full rounded-none rounded-r-md sm:text-base border-gray-300 border"
          placeholder={placeholder || ``}
        />
      </div>
    </div>
  )
);

ShortInput.displayName = "ShortInput";

export default ShortInput;
