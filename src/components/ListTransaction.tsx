import type { Transaction } from "../types/transactionType";
import noDataFound from "../assests/no-data-found.jpg";
const ListTransaction = ({ transactions, formatDate, handleDelete }: any) => {
  return (
    <div
      className=" mt-5 rounded-2xl
    border border-[#d1d5db] bg-white"
    >
      {transactions?.length === 0 && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            {/* <img className="w-[30%]" src={noDataFound} alt="no-data-found" /> */}
            <p className="text-gray-500 text-lg py-4">No transactions found</p>
          </div>
        </div>
      )}
      {transactions?.map((item: Transaction, index: number) => {
        const isFirst = index === 0;
        const isLast = index === transactions.length - 1;

        return (
          <div
            key={item?._id}
            className={`flex justify-between items-center p-4
        hover:border-[#4478fc] transition-all duration-200 hover:bg-[#eff6ff]
        ${isFirst ? "rounded-t-2xl" : ""}
        ${isLast ? "rounded-b-2xl" : ""}
      `}
          >
            <div className="flex flex-col">
              <h3>{item?.title}</h3>

              <div className="flex gap-2 text-gray-500">
                <p>{item?.category}</p>
                <span>|</span>
                <p>{formatDate(item?.date)}</p>
              </div>
            </div>

            <div className="text-right flex gap-5 items-center">
              <div>
                <p
                  className={`${
                    item?.type === "INCOME" ? "text-green-500" : "text-red-500"
                  } font-medium!`}
                >
                  {item?.type === "INCOME" ? "+₹" : "-₹"}
                  {Number(item?.amount).toLocaleString("en-IN")}
                </p>

                <p
                  className={`${
                    item?.type === "INCOME"
                      ? "text-green-500 bg-green-50"
                      : "text-red-500 bg-red-50"
                  } rounded-lg px-2 py-1 text-[10px]!`}
                >
                  {item?.type}
                </p>
              </div>
              <div className="flex gap-2">
                <i className="pi pi-pencil cursor-pointer hover:bg-[#e5eaf8] hover:text-[#4478fc] rounded-lg p-2"></i>
                <i
                  className="pi pi-trash cursor-pointer hover:bg-[#f5e7e7] hover:text-red-500 rounded-lg p-2"
                  onClick={() => handleDelete(item?._id)}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTransaction;
