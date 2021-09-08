import React from "react";

const TextArea = React.forwardRef(
  ({ onChange, onBlur, id, label, placeholder, rows, className }, ref) => (
    <div>
      <label htmlFor={id} className="block text-base font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          name={id}
          ref={ref}
          rows={rows || 10}
          className={`py-2 px-3 shadow-sm focus:ring focus:border-secondary focus:outline-none mt-1 block w-full sm:text-base border border-gray-300 rounded-md ${className}`}
          placeholder={placeholder || ``}
        />
      </div>
    </div>
  )
);

TextArea.displayName = "TextArea";

export default TextArea;
