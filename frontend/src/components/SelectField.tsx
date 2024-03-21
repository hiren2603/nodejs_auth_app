import { CountryType } from "../types/index";
type SelectPropType = {
  label: string;
  name: string;
  options: CountryType[];
  value: string;
  handleChange: React.ChangeEventHandler;
  error?: string | null;
};

function SelectField({
  label,
  name,
  options,
  value,
  handleChange,
  error = null,
}: SelectPropType) {
  return (
    <div className='mb-4 flex flex-col w-36'>
      <label className='pl-2' htmlFor={name}>
        {label}:{" "}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`h-12 outline-none rounded-l text-stone-900 font-bold border-2 border-transparent focus:border-teal-400 pl-2 ${
          name === "code" ? "bg-slate-200 text-stone-200" : ""
        }`}
      >
        {options.map((option: CountryType) => (
          <option key={option.code} value={option.dial_code}>
            {option.code}
          </option>
        ))}
      </select>
      <p className='error h-3 text-rose-500'>{error}</p>
    </div>
  );
}

export default SelectField;
