import { useSelector, useDispatch } from 'react-redux';
import { setTradeAmount } from '../redux/actions/user-actions';
import { ChangeEvent, useState } from 'react';

type Props = {
  value: string;
  upperDescription: string;
  lowerDescription: string;
};

export const TradeAmountLongBlock = ({ value, upperDescription, lowerDescription }: Props) => {
  let lineDescription: string = useSelector<any, any>((state) => state.user.tradeAmount);
  lineDescription = lineDescription.replace(',', '.');
  const [inputValue, setInputValue] = useState<string | number>(lineDescription);
  let a = 1;
  let b = 20;
  const maxLengthCheck = (object: any) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!String(inputValue).includes('.')) {
      setInputValue(e.target.value);
    }
    dispatch(setTradeAmount(e.target.value));
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col px-2 w-38">
        <p className="text-white text-[12px] cursor-context-menu">
          {upperDescription.toUpperCase()}
        </p>
        <input
          id={`input${lowerDescription}`}
          type="number"
          minLength={a}
          maxLength={b}
          className=" outline-none rounded-md py-2 mb-2 lg:w-[33rem] lg:rounded"
          onChange={handleChange}
          value={inputValue}
          placeholder={value}
          onKeyDown={(e) => e.key == 'e' && e.preventDefault()}
          onInput={maxLengthCheck}
        />
        <small className="text-white">{lowerDescription}</small>
      </div>
    </>
  );
};
