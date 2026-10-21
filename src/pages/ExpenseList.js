import ExpenseTable from '../components/ExpenseTable';

const ExpenseList = ({ expenses, onRemove, onTogglePaid }) => (
  <section>
    <h1>Danh sách khoản chi</h1>
    <div className="table-wrap">
      <ExpenseTable expenses={expenses} onRemove={onRemove} onTogglePaid={onTogglePaid} />
    </div>
  </section>
);

export default ExpenseList;
