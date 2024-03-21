import { MouseEventHandler } from "react";

type ButtonProps = {
  labelText: string;
  type: "submit" | "reset" | "button" | undefined;
  handleClick?: MouseEventHandler;
  isSubmitting: boolean;
};

function Button({ labelText, type, handleClick, isSubmitting }: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        onClick={handleClick}
        disabled={isSubmitting}
        className='bg-rose-700 hover:bg-rose-600 px-8 py-3 rounded-sm font-semibold text-lg disabled:bg-rose-400 disabled:cursor-not-allowed'
      >
        {labelText}
      </button>
    </div>
  );
}

export default Button;
