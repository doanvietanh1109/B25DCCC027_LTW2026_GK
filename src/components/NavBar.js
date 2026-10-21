import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="site-header">
    <nav className="container nav" aria-label="Điều hướng chính">
      <NavLink end to="/">Trang chủ</NavLink>
      <NavLink end to="/expenses">Danh sách</NavLink>
      <NavLink end to="/expenses/new">Thêm mới</NavLink>
    </nav>
  </header>
);

export default NavBar;
