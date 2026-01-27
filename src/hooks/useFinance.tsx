import type { TransactionSummary } from "../types/transactionType";

export const calculateSummary = (transactions: TransactionSummary[]) => {
  return transactions.reduce(
    (acc, txn) => {
      if (txn.type === "INCOME") {
        acc.totalIncome += txn.amount;
      } else {
        acc.totalExpense += txn.amount;
      }

      acc.balance = acc.totalIncome - acc.totalExpense;
      return acc;
    },
    {
      totalIncome: 0,
      totalExpense: 0,
      balance: 0,
    },
  );
};
