import { IconType } from "react-icons";

type props = {
  label: string;
  type: string;
  id: string;
  value: string;
  placeholder: string;
  name: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  icon: IconType | null;
};

function CommonInput({
  label,
  type,
  name,
  id,
  value,
  placeholder,
  onChange,
  icon: Icon,
}: props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium text-slate-700">{label}</label>
      <div className="flex flex-row items-center border-2 rounded gap-2 px-2 py-2 bg-white">
        {Icon && <Icon className="size-5 opacity-65" />}
        {type === "textarea" ? (
          <textarea
            className="px-1 py-1 w-full focus-within:outline-none"
            name={name}
            onChange={onChange}
            id={id}
            value={value}
            placeholder={placeholder}
          />
        ) : (
          <input
            className="px-1 py-1 w-full focus-within:outline-none"
            type={type}
            name={name}
            onChange={onChange}
            id={id}
            value={value}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}

export default CommonInput;
