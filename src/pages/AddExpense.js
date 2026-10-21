import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddExpense = ({ expenses, onAdd }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || String(amount).trim() === '' || !category || !date) {
      setFormError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const nextId = Math.max(0, ...expenses.map(({ id }) => id)) + 1;
    onAdd({ id: nextId, title: title.trim(), amount: Number(amount), category, date, paid: false });
    navigate('/expenses', { replace: true });
  };

  return (
    <section className="panel">
      <h1>Thêm khoản chi mới</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="expense-title">Tên khoản chi</label>
          <input id="expense-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="expense-amount">Số tiền</label>
          <input id="expense-amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="expense-category">Danh mục</label>
          <select id="expense-category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="expense-date">Ngày chi</label>
          <input id="expense-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit">Thêm</button>
        {formError && <p className="form-error">{formError}</p>}
      </form>
    </section>
  );
};

export default AddExpense;
