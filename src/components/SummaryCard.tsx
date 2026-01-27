import type { SummaryCardProps } from "../types/transactionType";

const SummaryCard = ({
  title,
  amount,
  icon,
  textColor,
  iconBg,
}: SummaryCardProps) => {
  return (
    <div className="flex justify-between items-center p-5 rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className={`text-3xl font-semibold ${textColor}`}>
          ${amount.toFixed(2)}
        </p>
      </div>

      <div
      // className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconBg}`}
      >
        {/* {icon} */}
      </div>
    </div>
  );
};

export default SummaryCard;
