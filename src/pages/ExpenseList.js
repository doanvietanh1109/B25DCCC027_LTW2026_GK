const ExpenseList = ({ expenses }) => (
  <section>
    <h1>Danh sách khoản chi</h1>
    <div className="panel">
      <p>Đã tải {expenses.length} khoản chi từ API.</p>
      {expenses.map(({ id, title }) => <p key={id}>{id}. {title}</p>)}
    </div>
  </section>
);
export default ExpenseList;
