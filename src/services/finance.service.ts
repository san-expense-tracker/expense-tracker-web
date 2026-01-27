import type { CreateTransactionFormData } from "../types/transactionType";
import { api } from "./api";

export interface GetFinanceParams {
  type?: "INCOME" | "EXPENSE";
  category?: string;
  search?: string;
  page: number;
  limit: number;
  sort: string;
}
export const FinanceService = {
  getTransactions(params: GetFinanceParams) {
    return api.get("/finance", {
      params,
    });
  },
  /** Delete a transaction by its ID */
  deleteTransaction(id: string) {
    return api.delete(`/finance/${id}`);
  },
  createTransaction(data: CreateTransactionFormData) {
    return api.post("/finance", data);
  },
};
