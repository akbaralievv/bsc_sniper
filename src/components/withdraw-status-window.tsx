import { AmountToWithdrawBlock } from "./amount-to-withdraw-block";

type Props = {
  title: string;
  description: string;
  editable: boolean;
  setWithdrawStatus: any;
};

export const WithdrawStatusWindow = ({
  title,
  description,
  setWithdrawStatus,
}: Props) => {
  return (
    <>
      <section>
        <div className="fixed inset-0 z-10 overflow-y-auto shadow-2xl backdrop-blur-sm flex justify-center items-center h-[100vh]">
          <div className="relative w-full max-w-xl max-h-full border-2 bg-[#f5f5dc] border-black rounded-md">
            <div className="relative flex flex-col gap-12 py-3 justify-between bg-white rounded-lg shadow dark:bg-transparent border-3 border-white pt-4">
              <div className=" lg:px-8 text-center flex flex-col space-y-3">
                <p className="text-lg">{title}</p>
              </div>
              <div className=" lg:px-8 text-center flex flex-col space-y-3">
                <p className="text-lg font-bold">{description}</p>
              </div>
              <div className=" lg:px-8 text-center flex flex-col space-y-3">
                <button
                  onClick={() => setWithdrawStatus(false)}
                  className="cursor-pointer p-2 w-44 mx-auto outline-none rounded-md text-black border-black border-2 text-center"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
