import { ChangeEvent, useEffect, useState } from "react";
import copyIcon from "../assets/BOT icons/icons8-copy-100.png";
type Props = {
  value: string;
  lineDescription: string;
  editable: boolean;
};

export const WithdrawAddressBlock = ({
  value,
  lineDescription,
  editable,
}: Props) => {
  const [input, setInput] = useState(value);

  useEffect(() => {
    setInput(lineDescription);
  }, [lineDescription]);

  const copyText = () => {
    navigator.clipboard.writeText(input);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="flex items-center border-2 relative my-2 mx-auto overflow-hidden py-2 border-black p-1 w-[90%]">
        <input
          id={`input_withdraw_amount`}
          type="text"
          readOnly={!editable}
          className=" outline-none py-2 md:mr-2 md:text-[18px] sm:text-[13px] msm:text-[10px] text-[12px] xsm:text-[5px] lg:text-[20px]  sm:w-[75%] w-[90%] lg:w-[87%] mr-12 md:w-[80%] "
          value={input}
          onChange={handleChange}
        />
        <button onClick={copyText} className="absolute right-1">
          <img src={copyIcon} alt="" className=" w-12" />
        </button>
      </div>
    </>
  );
};
