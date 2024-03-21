interface IprofileInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
  readOnly?: boolean;
}

function ProfileInput({ label, ...props }: IprofileInputProps) {
  return (
    <div className='flex flex-col'>
      <label className='pl-2' htmlFor={props.name}>
        {label}
      </label>
      <input
        {...props}
        className='h-12 outline-none text-stone-200 bg-slate-800 font-bold border-2 border-transparent focus:border-stone-400 px-4 rounded'
      />
    </div>
  );
}

export default ProfileInput;
