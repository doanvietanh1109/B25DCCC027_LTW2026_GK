import { useParams } from 'react-router-dom';
const ExpenseDetail = () => {
  const { id } = useParams();
  return <section className="panel"><h1>Chi tiết khoản chi {id}</h1><p>Trang chi tiết sẽ được hoàn thiện ở lần commit 2.</p></section>;
};
export default ExpenseDetail;
