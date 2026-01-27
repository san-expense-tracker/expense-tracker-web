// types/transaction.ts

export type TransactionType = "INCOME" | "EXPENSE";

export interface Transaction {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: TransactionType;
  createdAt: string;
  __v: number;
}

export interface Meta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface TransactionsResponse {
  transactions: Transaction[];
  meta: Meta;
}
export interface FilterFormData {
  type: string | null;
  category: string | null;
  sort: string;
  search?: string;
}
export interface CreateTransactionFormData {
  type: string | null;
  category: string | null;
  amount: number;
  date: Date;
  title: string;
}
export type TransactionSummary = {
  amount: number;
  type: "INCOME" | "EXPENSE";
};
export type SummaryCardProps = {
  title: string;
  amount: number;
  icon: React.ReactNode;
  textColor: string;
  iconBg: string;
};
