import SummaryCard from "./SummaryCard";
import { calculateSummary } from "../hooks/useFinance";

const FinanceSummary = ({ transactions }: { transactions: any[] }) => {
  const { totalIncome, totalExpense, balance } = calculateSummary(transactions);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Balance */}
      <SummaryCard
        title="Total Balance"
        amount={balance}
        textColor="text-gray-900"
        iconBg="bg-blue-100"
        icon={<></>}
      />

      {/* Total Income */}
      <SummaryCard
        title="Total Income"
        amount={totalIncome}
        textColor="text-green-600"
        iconBg="bg-green-100"
        icon={<></>}
      />

      {/* Total Expense */}
      <SummaryCard
        title="Total Expense"
        amount={totalExpense}
        textColor="text-red-600"
        iconBg="bg-red-100"
        icon={<></>}
      />
    </div>
  );
};

export default FinanceSummary;
