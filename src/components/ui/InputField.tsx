import React from "react";
import clsx from "clsx";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  prefix?: string;
  labelClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  prefix,
  labelClassName,
  className,
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(
            "text-xs font-semibold uppercase tracking-wide text-gray-500",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <div className="flex items-stretch">
        {prefix && (
          <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          className={clsx(
            "w-full px-3 py-2 text-sm border rounded-lg outline-none transition-all duration-200",
            "bg-white text-gray-900 placeholder-gray-400",
            "focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500",
            error
              ? "border-red-400 focus:ring-red-300 focus:border-red-400"
              : "border-gray-300",
            prefix && "rounded-l-none",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-0.5 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
};

export default InputField;