import infoIcon from "../assets/BOT icons/icons8-icons-ios-16/icons8-support-50.png";
import settingsIcon from "../assets/BOT icons/icons8-icons-ios-16/icons8-settings-50.png";
import telegramIcon from "../assets/BOT icons/icons8-icons-ios-16/icons8-telegram-app-50.png";
import balanceIcon from "../assets/BOT icons/2 in TT Balance.png";
import profitIcon from "../assets/BOT icons/5 in TT Profit.png";
import snipedIcon from "../assets/BOT icons/3 in TT.png";
import soldIcon from "../assets/BOT icons/4 in TT Tokens Sold.png";

import { SquareInfoBlock } from "../components/square-info-block";
import { LongInfoBlock } from "../components/long-info-block";
import { CheckBox } from "../components/check-box";
import { Logs } from "../components/logs";
import { useEffect, useState } from "react";
import Popup from "../components/popup";
import { useSelector } from "react-redux";
import { getChainFullName } from "../services/utils/get-chain-full-name";
import { getChainTradingCurrency } from "../services/utils/get-chain-trading-currency";
import { getChainNode } from "../services/utils/get-chain-node";
import { PkLongBlock } from "../components/pk-long-block";
import { getValidateDesc } from "../services/utils/get-validate-desc";
import { getRouterDesc } from "../services/utils/get-router-desc";
import { getRouterName } from "../services/utils/get-router-name";
import { getRouterAddress } from "../services/utils/get-router-address";
import { StartButton } from "../components/start-button";
import { StopButton } from "../components/stop-button";
import { TradeAmountLongBlock } from "../components/trade-amount-long-block";
import { WithdrawWindow } from "../components/withdraw-window";
import { AmountToWithdrawBlock } from "../components/amount-to-withdraw-block";
import { WithdrawStatusWindow } from "../components/withdraw-status-window";

export const Dashboard = () => {
  const [withdrawWindow, setWithdrawWindow] = useState(false);
  const [withdrawStatus, setWithdrawStatus] = useState(false);
  const showModal = useSelector<any, any>((state) => state.dashboard.showModal);
  const chain = useSelector<any, any>((state) => state.dashboard.chain);
  const snipedTokens = useSelector<any, any>(
    (state) => state.snipingStats.snipedTokens
  );
  const soldTokens = useSelector<any, any>(
    (state) => state.snipingStats.soldTokens
  );
  const profitAmount = useSelector<any, any>(
    (state) => state.snipingStats.profitAmount
  );
  const balance = useSelector<any, any>((state) => state.user.balanceReadable);
  const address = useSelector<any, any>((state) => state.user.address);

  const showWithdrawButton = true;

  const showWithdrawWindow = () => {
    setWithdrawWindow(true);
  };

  const handleWithdraw = () => {
    setWithdrawWindow(false);
    setWithdrawStatus(true);
  };

  const [withdrawStatusWindow, setWithdrawStatusWindow] = useState(false);
  const showWithdrawStatus = () => {
    setWithdrawStatusWindow(true);
  };

  useEffect(() => {
    <h1>G</h1>;
  }, []);

  return (
    <>
      <Popup />
      {withdrawWindow && (
        <WithdrawWindow
          setWithdrawWindow={setWithdrawWindow}
          handleWithdraw={handleWithdraw}
        />
      )}
      {withdrawStatus && (
        <WithdrawStatusWindow
          editable
          description="Your withdrawal request has been accepted and will be approved
        by the administrator verification"
          title="Withdrawal of trade balance"
          setWithdrawStatus={setWithdrawStatus}
        />
      )}
      {withdrawStatusWindow && (
        <WithdrawStatusWindow
          description="Your application is being reviewed by the administrator, please wait"
          title="Withdrawal of trade balance"
          setWithdrawStatus={setWithdrawStatusWindow}
          editable
        />
      )}
      <main
        className={`bg-[#2e363e] ${
          showModal && "shadow-lg"
        } min-h-screen w-full m-0`}
      >
        <nav className="flex justify-between mx-3">
          <section className="hidden opacity-0 lg:mt-3 lg:block">
            <span>
              <img
                className="text-white w-10"
                src={settingsIcon}
                alt="settings"
                title="settings"
              />
            </span>
          </section>
          <h1
            id="heading"
            className="mt-4 bg-[#2e363e]  font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#eda54d] to-[#fc75fe]"
          >
            {chain} Sniper
          </h1>
          <section className="hidden lg:flex items-center mt-3">
            <span className="mx-2">
              {showWithdrawButton ? (
                <button
                  className="cursor-pointer p-2 outline-none rounded-md text-white border-white border-2 text-center"
                  onClick={showWithdrawWindow}
                >
                  Withdraw
                </button>
              ) : (
                <button
                  className="cursor-pointer p-2 outline-none rounded-md text-white border-white border-2 text-center"
                  onClick={showWithdrawStatus}
                >
                  Withdraw Status
                </button>
              )}
            </span>
            <span className="mx-2">
              <a href="https://github.com/AsharMallick" target="_blank">
                <img
                  className="w-10"
                  src={telegramIcon}
                  alt="telegram"
                  title="telegram"
                />
              </a>
            </span>
            <span className="mx-2 w-10">
              <a href="/pdf/dummy.pdf" target="_blank">
                <img src={infoIcon} alt="info" title="info" />
              </a>
            </span>
          </section>
        </nav>
        <section className="lg:mx-16  w-[95%] lg: mx-auto  mt-16 lg:flex lg:justify-between bg-[#2e363e] grid grid-cols-2">
          <SquareInfoBlock
            icon={balanceIcon}
            value={balance}
            description={`${getChainTradingCurrency(chain)} balance`}
          />
          <SquareInfoBlock
            icon={snipedIcon}
            value={snipedTokens}
            description="Tokens Sniped"
          />
          <SquareInfoBlock
            icon={soldIcon}
            value={soldTokens}
            description="Tokens Sold"
          />
          <SquareInfoBlock
            icon={profitIcon}
            value={profitAmount}
            description="Profit"
          />
        </section>
        <hr className="sm:hidden lg:block mt-5 w-[95%] 2xl:w-[95%] 2xl:border-white 2xl:border-[1.2px] xl:w-[95%] xl:border-white xl:border-[1.2px]  3xl:w-[95%] mx-auto" />
        <section className="lg:flex">
          <section className="mx-6 lg:w-[1000px] lg:border-r-2 lg:pr-3 lg:mr-0 my-4 lg:mx-10 lg:p-2 lg:mt-0 border-white bg-[#2e363e] space-y-7">
            <LongInfoBlock
              lineDescription={
                address.length > 1 ? address : `${chain} Address`
              }
              value={address != undefined ? address : `${chain} Address`}
              upperDescription={`${chain} Wallet Address`}
              lowerDescription={`Enter your ${getChainFullName(chain)} Address`}
            />
            <PkLongBlock
              lineDescription={`${chain} Wallet Private Key`}
              value={`${chain} Wallet Private Key`}
              upperDescription={`${chain} Wallet Private Key`}
              lowerDescription="Enter your Private key"
            />
            <LongInfoBlock
              lineDescription={`${getChainNode(chain)}`}
              value={`${getChainNode(chain)}`}
              upperDescription={`${chain} Node`}
              lowerDescription={`Leave default or enter your own ${chain} Node URL`}
            />
            <LongInfoBlock
              lineDescription={getRouterAddress(chain)}
              value={getRouterAddress(chain)}
              upperDescription={`${getRouterName(chain)} Router Address`}
              lowerDescription="Leave default or update if PancakeSwap Router Address has changed"
            />
            {/* <span className='block lg:hidden'>
                            <LongInfoBlock lineDescription='0.05' value='0.05' upperDescription={`${getChainTradingCurrency(chain)} Amount`} lowerDescription={`${getChainCurrency(chain)} Amount to spend on each snipe`} />
                        </span> */}
          </section>
          <section className="lg:border-b-2 lg:block lg:h-[325px] lg:mx-auto mx-6 lg:border-r-2 lg:pr-3 lg:mr-0 my-4 lg:p-2 lg:mt-0 border-white bg-[#2e363e] space-y-7">
            <TradeAmountLongBlock
              value="0.05"
              upperDescription={`${getChainTradingCurrency(chain)} Amount`}
              lowerDescription={`${getChainTradingCurrency(
                chain
              )} Amount to spend on each snipe`}
            />
          </section>
          <section className="bg-[#2e363e] lg:ml-0 lg:mr-10 w-3/4 ml-5 pb-5  lg:h-fit lg:border-b-2 md:pb-[80px] lg:pt-5">
            <p className="text-[15px] mb-5 text-white opacity-50 text-center">
              SMART CONTRACT AUDIT DETAILS
            </p>
            <CheckBox description="Source Code" />
            <CheckBox description={getValidateDesc(chain)} />
            <CheckBox description="Mint Function" />
            <CheckBox description="Honey Pot" />
            <CheckBox description={getRouterDesc(chain)} />
          </section>
        </section>
        <section className="flex flex-col lg:flex-row space-y-4 my-4 l  lg:w-[700px] lg:items-center lg:mb-10 lg:ml-[600px] lg:justify-center lg:my-[-100px] 2xl:ml-[900px] 2xl:mt-[-84px] 3xl:ml-[800px] 4xl:ml-[800px] 5xl:ml-[950px] 6xl:ml-[1000px] slg:ml-[700px] mlg:ml-[600px] llg:ml-[500px]">
          <div className="bg-[#2e363e] p-1 lg:w-[1000px] m-2 lg:m-0 lg:p-0 text-center">
            <StartButton />
          </div>
          <div
            className="bg-[#2e363e] p-1 lg:w-[1000px] m-2 lg:mb-[21px]  lg:p-0 text-center"
            style={{ marginBottom: "21px" }}
          >
            <StopButton />
          </div>
        </section>
        <section className="bg-[#2e363e] w-full h-fit lg:mb-4">
          <h1 className="text-white opacity-40 mx-3 lg:mx-16 lg:mb-2 lg:text-lg lg:ml-[100px] 3xl:ml-[100px] 4xl:ml-[200px]">
            LOGS
          </h1>
          <Logs newMessage="Temporary Text" />
        </section>
        <section className="flex items-center mt-3 bg-[#2e363e] lg:hidden mb-4">
          <span className="mx-2">
            <a href="https://github.com/AsharMallick" target="_blank">
              <img
                className="w-10"
                src={telegramIcon}
                alt="telegram"
                title="telegram"
              />
            </a>
          </span>
          <span className="mx-2 w-10">
            <a href="pdf/dummy.pdf" target="_blank">
              <img src={infoIcon} alt="info" title="info" />
            </a>
          </span>
          <span className="mx-2">
            {showWithdrawButton ? (
              <button
                className="cursor-pointer p-2 outline-none rounded-md text-white border-white border-2 text-center"
                onClick={showWithdrawWindow}
              >
                Withdraw
              </button>
            ) : (
              <button
                className="cursor-pointer p-2 outline-none rounded-md text-white border-white border-2 text-center"
                onClick={showWithdrawStatus}
              >
                Withdraw Status
              </button>
            )}
          </span>
        </section>
      </main>
    </>
  );
};
