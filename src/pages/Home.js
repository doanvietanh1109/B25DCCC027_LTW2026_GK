import { formatMoney } from '../data';

const Home = ({ expenses }) => {
  // Thống kê luôn dựa trên danh sách hiện tại, cập nhật khi thêm/xóa/đổi trạng thái.
  const totalAmount = expenses.reduce((total, { amount }) => total + amount, 0);
  const unpaidAmount = expenses.reduce(
    (total, { amount, paid }) => total + (paid ? 0 : amount),
    0
  );

  return (
    <section className="panel">
      <h1>Chi tiêu cá nhân</h1>
      <p>Chào mừng bạn đến với ứng dụng quản lý chi tiêu.</p>

      <div className="home-statistics" aria-label="Thống kê chi tiêu">
        <p className="info-line"><strong>Tổng số khoản chi:</strong> {expenses.length}</p>
        <p className="info-line"><strong>Tổng số tiền đã chi:</strong> {formatMoney(totalAmount)}</p>
        <p className="info-line"><strong>Tổng số tiền chưa thanh toán:</strong> {formatMoney(unpaidAmount)}</p>
      </div>
    </section>
  );
};

export default Home;
