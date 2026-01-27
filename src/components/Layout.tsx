import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import FinoButton from "./FinoButton";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto h-[60px] flex items-center justify-between px-4">
          {/* Left */}
          <div className="font-bold text-xl text-gray-900">Finance Tracker</div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <FinoButton
              link
              variant={location.pathname === "/" ? "secondary" : "text"}
              label="Dashboard"
              onClick={() => navigate("/")}
            />

            <FinoButton
              link
              variant={
                location.pathname === "/transactions" ? "secondary" : "text"
              }
              label="All Transactions"
              onClick={() => navigate("/transactions")}
            />

            <FinoButton
              variant="primary"
              label="Add Transaction"
              onClick={() => navigate("/add-transaction")}
            />
          </div>
        </div>
      </header>

      <main className="p-10 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
