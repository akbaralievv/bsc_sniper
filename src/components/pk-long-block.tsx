import { ChangeEvent, useEffect, useState } from 'react';
import { setPk } from '../services/pk.service';

const gradientBorderStyles = {
  borderWidth: '4px',
  borderStyle: 'solid',
  borderImage: 'linear-gradient(to right, #ec4899, #ef4444, #eab308) 1',
  borderRadius: '10px',
  overflow: 'hidden',
};

type Props = {
  value: string;
  lineDescription: string;
  upperDescription: string;
  lowerDescription: string;
};

function maskString(input: string) {
  const visiblePart = input.slice(0, 3) + '*'.repeat(input.length - 7) + input.slice(-3);
  return visiblePart;
}

export const PkLongBlock = ({
  value,
  lineDescription,
  upperDescription,
  lowerDescription,
}: Props) => {
  const [input, setInput] = useState(lineDescription);

  useEffect(() => {
    if (input.length == 64) console.log(`Pk found`);

    setInput(lineDescription);
  }, [lineDescription]);

  useEffect(() => {
    if (input.length == 64) {
      setPk(input);
    } else if (input.length === 66) {
      setPk(input);
    }
  }, [input]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.length == 65 || e.target.value.length == 64 || e.target.value.length == 66) {
      let newInput = maskString(e.target.value);
      setInput(newInput!);
    }
  };

  return (
    <>
      <div className="flex  flex-col px-2 w-38">
        <label
          htmlFor={`input${lowerDescription}`}
          className="text-white text-[12px] cursor-context-menu">
          {upperDescription.toUpperCase()}
        </label>
        <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 h-54">
          <input
            id={`input${lowerDescription}`}
            type="text"
            className="py-2 border-0 outline-none relative rounded text-base lg:rounded w-full h-50"
            onChange={handleChange}
            value={input}
            placeholder={value}
          />
        </div>

        <small className="text-white">{lowerDescription}</small>
      </div>
    </>
  );
};
