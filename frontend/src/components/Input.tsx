type InputProps = {
  type?: string;
  name: string;
  label: string;
  value: string;
  handleChange: React.ChangeEventHandler;
  error?: string | null | undefined;
  classes?: string;
  readOnly?: boolean;
};
function Input({
  type = "text",
  name,
  label,
  value,
  handleChange,
  error = null,
  classes = undefined,
  readOnly = false,
}: InputProps) {
  classes =
    "relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:bg-rose-800 file:px-3  file:py-[0.30rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white";

  return (
    <div className='mb-4 flex flex-col w-full '>
      <label className='pl-2' htmlFor={name}>
        {label}:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        readOnly={readOnly}
        className={
          type !== "file"
            ? `h-12 outline-none text-stone-900 font-bold border-2 border-transparent focus:border-teal-400 px-4 ${
                name == "phone"
                  ? "rounded-r border-l-2 border-stone-800"
                  : "rounded"
              }`
            : classes
        }
      />
      <p className='error h-3 text-rose-500'>{error}</p>
    </div>
  );
}

export default Input;
