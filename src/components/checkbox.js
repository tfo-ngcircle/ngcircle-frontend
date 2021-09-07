import React from "react";

const Checkbox = React.forwardRef(
  ({ onChange, onBlur, id, label, className }, ref) => (
    <div className="flex flex-row tems-center">
      <div className=" my-auto">
        <input
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          id={id}
          name={id}
          type="checkbox"
          className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
        />
      </div>
      {label && (
        <div className="ml-3 text-sm my-auto">
          <label htmlFor={id} className="font-medium text-gray-700">
            {label}
          </label>
        </div>
      )}
    </div>
  )
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
