import { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar';
import ExpenseTable from '../components/ExpenseTable';

const ExpenseList = ({ expenses, onRemove, onTogglePaid }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const [width, setWidth] = useState(window.innerWidth);

  // Tên hàm theo yêu cầu kỹ thuật riêng của đề DE4.
  const handleQueryShift = (event) => setQuery(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredExpenses = expenses.filter(({ title, category: itemCategory }) => {
    const matchesQuery = title.toLocaleLowerCase('vi-VN').includes(query.trim().toLocaleLowerCase('vi-VN'));
    const matchesCategory = category === 'Tất cả' || category === itemCategory;
    return matchesQuery && matchesCategory;
  });

  const mobile = width < 768;
  return (
    <section>
      <h1>Danh sách khoản chi</h1>
      <FilterBar
        query={query}
        category={category}
        onQueryChange={handleQueryShift}
        onCategoryChange={handleCategoryChange}
      />
      <p>Tìm thấy {filteredExpenses.length} khoản chi</p>
      <p>Chế độ: {mobile ? 'Điện thoại' : 'Máy tính'}</p>
      <div className={`table-wrap${mobile ? ' mobile' : ''}`}>
        <ExpenseTable expenses={filteredExpenses} onRemove={onRemove} onTogglePaid={onTogglePaid} />
      </div>
    </section>
  );
};

export default ExpenseList;
