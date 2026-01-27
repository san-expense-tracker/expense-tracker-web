import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import type { CreateTransactionFormData } from "../types/transactionType";
import { Dropdown } from "primereact/dropdown";
import FinoButton from "../components/FinoButton";
import { useNavigate } from "react-router-dom";
import { FinanceService } from "../services/finance.service";
import { InputText } from "primereact/inputtext";

const AddTransaction: React.FC = () => {
  // Example – replace the old line with this:
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTransactionFormData>({
    defaultValues: {
      type: "EXPENSE",
      amount: 0,
      date: new Date(),
    },
  });

  const navigate = useNavigate();

  const expenseCategoryOptions = [
    { label: "Food", value: "food" },
    { label: "Transport", value: "transport" },
    { label: "Shopping", value: "shopping" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Others", value: "others" },
  ];
  const incomeCategoryOptions = [
    { label: "Salary", value: "salary" },
    { label: "Freelance", value: "freelance" },
    { label: "Investment", value: "investment" },
    { label: "Others", value: "others" },
  ];
  const watchedType = watch("type");
  const onSubmit = (data: CreateTransactionFormData) => {
    console.log("submit data", data);
    // navigate("/");
    FinanceService.createTransaction(data);
  };
  return (
    <div className="max-w-md mx-auto glass-card fade-in">
      <h2 className="text-lg font-medium!">Add Transaction</h2>

      <div className="mt-5">
        {" "}
        <form
          className="flex flex-col gap-2 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <div className="flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <SelectButton
                  value={field.value}
                  onChange={(e) => field.onChange(e.value)}
                  options={options}
                  itemTemplate={(option) => (
                    <span
                      className={
                        option === "EXPENSE" ? "text-red-600" : "text-green-600"
                      }
                    >
                      {option}
                    </span>
                  )}
                />
              )}
            />
          </div> */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Type</label>

            <Controller
              name="type"
              control={control}
              rules={{ required: "Type is required" }}
              render={({ field }) => (
                <div className="relative flex w-full rounded-lg border border-gray-300 bg-gray-50 p-1 shadow-sm">
                  {/* Active pill */}
                  <div
                    className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-white shadow-md transition-transform duration-300
            ${field.value === "INCOME" ? "translate-x-0" : "translate-x-full"}
          `}
                  />

                  {/* Income */}
                  <button
                    type="button"
                    onClick={() => field.onChange("INCOME")}
                    className={`relative z-10 flex-1 py-2 text-sm font-medium transition
            ${field.value === "INCOME" ? "text-green-500" : "text-gray-400"}
          `}
                  >
                    Income
                  </button>

                  {/* Expense */}
                  <button
                    type="button"
                    onClick={() => field.onChange("EXPENSE")}
                    className={`relative z-10 flex-1 py-2 text-sm font-medium transition
            ${field.value === "EXPENSE" ? "text-red-500" : "text-gray-400"}
          `}
                  >
                    Expense
                  </button>
                </div>
              )}
            />
            {errors.type && (
              <small className="text-red-500">{errors.type.message}</small>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="amount">Title</label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <InputText
                  id="title-input"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            {errors.title && (
              <small className="text-red-500">{errors.title.message}</small>
            )}
          </div>
          {/* Amount */}
          <div className="flex flex-col gap-2">
            <label htmlFor="amount">Amount</label>
            <Controller
              name="amount"
              control={control}
              rules={{
                required: "Amount is required",
                min: { value: 1, message: "Amount must be greater than 0" },
              }}
              render={({ field }) => (
                <>
                  <InputNumber
                    id="number-input"
                    value={field.value}
                    onValueChange={(e) => field.onChange(e.value)}
                    className={errors.amount ? "p-invalid" : ""}
                  />
                  {errors.amount && (
                    <small className="text-red-500">
                      {errors.amount.message}
                    </small>
                  )}
                </>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <>
                  <Dropdown
                    value={field.value}
                    onChange={(e) => field.onChange(e.value)}
                    options={
                      watchedType === "EXPENSE"
                        ? expenseCategoryOptions
                        : incomeCategoryOptions
                    }
                    optionLabel="label"
                    className={`w-full ${errors.category ? "p-invalid" : ""}`}
                  />
                  {errors.category && (
                    <small className="text-red-500">
                      {errors.category.message}
                    </small>
                  )}
                </>
              )}
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label htmlFor="date">Date(dd/mm/yyyy)</label>
            <Controller
              name="date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <>
                  <Calendar
                    value={field.value}
                    onChange={(e) => field.onChange(e.value)}
                    dateFormat="dd/mm/yy"
                    className={errors.date ? "p-invalid" : ""}
                  />
                  {errors.date && (
                    <small className="text-red-500">
                      {errors.date.message}
                    </small>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex gap-2">
            <FinoButton
              variant="secondary"
              label="cancel"
              type="button"
              className="w-[47%]!"
            />
            <FinoButton
              variant="primary"
              label="save"
              type="submit"
              className="w-[47%]!"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
