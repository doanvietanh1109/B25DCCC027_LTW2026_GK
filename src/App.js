const BUILD_TAG = "mv-3358";
/* eslint-disable import/first */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ExpenseList from './pages/ExpenseList';
import AddExpense from './pages/AddExpense';
import ExpenseDetail from './pages/ExpenseDetail';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios.get('/data/expenses.json', { signal: controller.signal })
      .then((res) => setExpenses(res.data))
      .catch((err) => { if (!axios.isCancel(err)) setError(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  const handleAdd = (expense) => {
    setExpenses((current) => [...current, expense]);
  };

  const handleRemove = (id) => {
    setExpenses((current) => current.filter((expense) => expense.id !== id));
  };

  const handleTogglePaid = (id) => {
    setExpenses((current) => current.map((expense) =>
      expense.id === id ? { ...expense, paid: !expense.paid } : expense
    ));
  };

  const show = (element) => loading ? <p>Đang tải...</p> : error ? <p>Không tải được dữ liệu.</p> : element;

  return (
    <Routes key={BUILD_TAG}>
      <Route path="/" element={<Layout />}>
        <Route index element={show(<Home />)} />
        <Route path="expenses" element={show(<ExpenseList expenses={expenses} onRemove={handleRemove} onTogglePaid={handleTogglePaid} />)} />
        <Route path="expenses/new" element={show(<AddExpense expenses={expenses} onAdd={handleAdd} />)} />
        <Route path="expenses/:id" element={show(<ExpenseDetail expenses={expenses} />)} />
      </Route>
    </Routes>
  );
};

export default App;
