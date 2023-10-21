import { useState } from "react";
import { AmountToWithdrawBlock } from "./amount-to-withdraw-block";
import { WithdrawAddressBlock } from "./withdraw-address-block";
export const WithdrawWindow = ({ setWithdrawWindow, handleWithdraw }: any) => {
  const showWithdrawButton = true;
  return (
    <>
      <section>
        <div className="fixed inset-0 z-10 overflow-y-auto shadow-2xl backdrop-blur-sm flex justify-center items-center h-[100vh]">
          <div className="relative w-full max-w-xl max-h-full border-2 bg-[#f5f5dc] border-black rounded-md">
            <div className="relative flex flex-col gap-1 bg-white rounded-lg shadow dark:bg-transparent border-3 border-white pt-4">
              <div className=" lg:px-8 text-center flex flex-col space-y-3">
                <p className="text-lg">Withdrawal of trade balance</p>
              </div>
              <div className="text-center my-2">
                Specify the amount to be withdrawal from the balance
                <AmountToWithdrawBlock tradingCurrency="USDT" />
              </div>
              <div className="text-center mt-6 mb-4">
                <p>
                  Specify wallet for balance withdrawal if you have multiple{" "}
                  <br />
                  wallets, specify two wallets
                </p>
                <WithdrawAddressBlock
                  value={"SDRW7SK2SrPiuHGqG1qwspC51gE7VxNoIY"}
                  lineDescription={"SDRW7SK2SrPiuHGqG1qwspC51gE7VxNoIY"}
                  editable={false}
                />
              </div>
              <div className="text-center mt-6 mb-4">
                Specify the wallet to withdraw the balance
                <WithdrawAddressBlock
                  value={"SDRW7SK2SrPiuHGqG1qwspC51gE7VxNoIY"}
                  lineDescription={"SDRW7SK2SrPiuHGqG1qwspC51gE7VxNoIY"}
                  editable={true}
                />
              </div>
              <div className="w-2/3 flex items-center gap-2 justify-start mx-auto mt-6 mb-4">
                <CustomCheckbox label={"I filled it out correctly"} />
              </div>
              <div className="w-2/3 mx-auto my-4 gap-4 flex items-center justify-between">
                <button
                  hidden={!showWithdrawButton}
                  onClick={handleWithdraw}
                  className="cursor-pointer py-2 px-4 outline-none rounded-md text-black border-black border-2 text-center"
                >
                  Withdraw
                </button>
                <button
                  onClick={() => setWithdrawWindow(false)}
                  className="cursor-pointer py-2 px-4 outline-none rounded-md text-black border-black border-2 text-center"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type Props = {
  label: string;
};
export const CustomCheckbox = ({ label }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div className="w-6 h-6 border-2 border-black bg-white flex justify-center items-center">
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
      <span className="ml-2">{label}</span>
    </label>
  );
};
