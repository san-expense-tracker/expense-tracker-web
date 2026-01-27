import React, { useEffect } from "react";
import FinanceSummary from "../components/FinanceSummary";
import { FinanceService } from "../services/finance.service";
import ListTransaction from "../components/ListTransaction";

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = React.useState<any[]>([]);

  const fetchTransactions = async () => {
    try {
      const params = {
        page: 1,
        limit: 100000,
        sort: "desc",
      };

      const { data } = await FinanceService.getTransactions(params);

      // ✅ IMPORTANT FIX
      setTransactions(data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  const handleDelete = async (id: string) => {
    try {
      await FinanceService.deleteTransaction(id);
      fetchTransactions();
    } catch (error) {
      console.error("Failed to delete transaction", error);
    }
  };
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  return (
    <div>
      <h1>Dashboard</h1>
      <FinanceSummary transactions={transactions} />
      <ListTransaction
        transactions={transactions}
        onDelete={handleDelete}
        formatDate={formatDate}
      />
    </div>
  );
};

export default Dashboard;
