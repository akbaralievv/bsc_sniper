import { useSelector, useDispatch } from "react-redux";
import { setWithdrawAmount } from "../redux/actions/withdraw-actions";
import { ChangeEvent, useState } from "react";

type Props = {
  tradingCurrency: string;
};

export const AmountToWithdrawBlock = ({ tradingCurrency }: Props) => {
  const placeHolder = "100.00";
  const lineDescription = useSelector<any, any>(
    (state) => state.withdraw.withdrawAmount
  );
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<number | string>(
    lineDescription | 1
  );
  let a = 1;
  let b = 20;
  const maxLengthCheck = (object: any) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(setWithdrawAmount(e.target.value));
  };

  return (
    <>
      <div className="flex items-center justify-end text-end border-2 my-2 w-2/3 mx-auto border-black p-1">
        <input
          id={`input_withdraw_amount`}
          type="number"
          minLength={a}
          maxLength={b}
          className=" outline-none text-end py-2 w-2/3 ml-auto mr-2 "
          onChange={handleChange}
          value={inputValue}
          onKeyDown={(e) => e.key == "e" && e.preventDefault()}
          onInput={maxLengthCheck}
        />
        <b>{tradingCurrency}</b>
      </div>
    </>
  );
};
