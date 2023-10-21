import { useState } from "react";
// import '../App.css'

type Props = {
  description: string;
};
export const CheckBox = ({ description }: Props) => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex mx-3 items-center gap-5 my-3">
      {/* <div className="h-8 w-8 my-2  text-center pt-1 bg-white px-1" onClick={()=>setChecked(!checked)}>
                <input type="checkbox" id={`check${description}`} checked={checked} className={`accent-white checked:border-none checked:outline-none border-1 ${!checked && "appearance-none"} border-white checked:outline-none`} onChange={()=>setChecked(!checked)}/>
            </div>
            <label htmlFor={`check${description}`} className="text-white">{description}</label> */}
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <div className="w-5 h-5 border-[1px] border-black bg-white flex justify-center items-center">
          {isChecked && (
            <svg
              className="w-4 h-4 text-black pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="3" // Adjust the stroke width as desired
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12l5 5L19 7"></path>
            </svg>
          )}
        </div>
        <span className="ml-2 text-white">{description}</span>
      </label>
    </div>
  );
};
