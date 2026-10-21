import { Link } from 'react-router-dom';
import { formatMoney } from '../data';

const ExpenseRow = ({ expense, onRemove, onTogglePaid }) => {
  const { id, title, amount, category, date, paid } = expense;
  return (
    <tr>
      <td><Link to={`/expenses/${id}`}>{title}</Link></td>
      <td>{formatMoney(amount)}</td>
      <td className="col-category">{category}</td>
      <td className="col-date">{date}</td>
      <td className={paid ? '' : 'unpaid'}>{paid ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
      <td>
        <div className="actions">
          <button type="button" onClick={() => onTogglePaid(id)}>
            {paid ? 'Đánh dấu chưa trả' : 'Đánh dấu đã trả'}
          </button>
          <button className="danger" type="button" onClick={() => onRemove(id)}>Xóa</button>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseRow;
