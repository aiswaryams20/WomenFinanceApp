import React, { createContext, useState, useContext } from 'react';

// Create Context
const BudgetContext = createContext();

// Custom Hook to use Budget Context
export const useBudget = () => useContext(BudgetContext);

// Context Provider
export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState([]);

  // Calculate Total Expenses
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

  // Calculate Remaining Budget
  const remainingBudget = parseFloat(budget) - totalExpenses;

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        expenses,
        setExpenses,
        totalExpenses,
        remainingBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
