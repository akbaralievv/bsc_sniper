type props = {
  value: string;
  description: string;
  icon: any;
};
export const SquareInfoBlock = ({ value, description, icon }: props) => {
  return (
    <section className="mx-auto my-3">
      <div className="h-52 w-40 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 ">
        <div className="flex  justify-center items-center flex-col  text-white h-full w-full bg-[#2e363e]">
          <span>
            <img src={icon} />
          </span>
          <span className="my-2">{value}</span>
          <span>{description}</span>
        </div>
      </div>
    </section>
  );
};
