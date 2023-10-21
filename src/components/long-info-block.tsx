import { useEffect, useState } from "react";
type Props = {
  value: string;
  lineDescription: string;
  upperDescription: string;
  lowerDescription: string;
};

export const LongInfoBlock = ({
  value,
  lineDescription,
  upperDescription,
  lowerDescription,
}: Props) => {
  const [input, setInput] = useState(lineDescription);
  const editable = false;

  useEffect(() => {
    setInput(lineDescription);
  }, [lineDescription]);

  return (
    <>
      <div className="flex flex-col px-2 w-38">
        <p className="text-white text-[12px] cursor-context-menu">
          {upperDescription.toUpperCase()}
        </p>
        <input
          readOnly={!editable}
          id={`input${lowerDescription}`}
          type="text"
          className="py-2 border-0 outline-none relative rounded text-base w-full lg:rounded"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={value}
        />
        <small className="text-white">{lowerDescription}</small>
      </div>
    </>
  );
};
