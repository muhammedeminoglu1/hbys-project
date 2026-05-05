import React from "react";
import clsx from "clsx";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  labelClassName?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  error,
  options,
  placeholder,
  labelClassName,
  className,
  id,
  ...props
}) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={selectId}
          className={clsx(
            "text-xs font-semibold uppercase tracking-wide text-gray-500",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={clsx(
          "w-full px-3 py-2 text-sm border rounded-lg outline-none transition-all duration-200 cursor-pointer",
          "bg-white text-gray-900 appearance-none",
          "focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500",
          error
            ? "border-red-400 focus:ring-red-300 focus:border-red-400"
            : "border-gray-300",
          className
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.75rem center",
          backgroundSize: "1.25em 1.25em",
          paddingRight: "2.5rem",
        }}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs text-red-500 mt-0.5 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;