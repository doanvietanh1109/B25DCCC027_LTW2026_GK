import { useNavigate, useParams } from 'react-router-dom';
import { formatMoney } from '../data';

const ExpenseDetail = ({ expenses }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = expenses.find(({ id: itemId }) => itemId === Number(id));

  if (!expense) return <section className="panel"><p>Không tìm thấy khoản chi.</p></section>;

  const { title, amount, category, date, paid } = expense;
  return (
    <section className="panel">
      <h1>Chi tiết khoản chi</h1>
      <p className="info-line">Tên khoản chi: {title}</p>
      <p className="info-line">Số tiền: {formatMoney(amount)}</p>
      <p className="info-line">Danh mục: {category}</p>
      <p className="info-line">Ngày: {date}</p>
      <p className="info-line">Trạng thái: {paid ? 'Đã thanh toán' : 'Chưa thanh toán'}</p>
      <button type="button" onClick={() => navigate(-1)}>Quay lại</button>
    </section>
  );
};

export default ExpenseDetail;
