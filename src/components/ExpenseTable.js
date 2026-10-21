import ExpenseRow from './ExpenseRow';

const ExpenseTable = ({ expenses, onRemove, onTogglePaid }) => (
  <table>
    <thead>
      <tr>
        <th>Khoản chi</th><th>Số tiền</th><th className="col-category">Danh mục</th>
        <th className="col-date">Ngày</th><th>Trạng thái</th><th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {expenses.length === 0 ? (
        <tr><td colSpan={6}>Không có dữ liệu</td></tr>
      ) : expenses.map((expense) => (
        <ExpenseRow key={expense.id} expense={expense} onRemove={onRemove} onTogglePaid={onTogglePaid} />
      ))}
    </tbody>
  </table>
);

export default ExpenseTable;
