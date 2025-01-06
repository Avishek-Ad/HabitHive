import React from "react";

interface CommonSelectProps {
  id: string;
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  id,
  label,
  name,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="font-medium text-slate-700">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="px-2 py-3 border-2 rounded bg-white focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommonSelect;

