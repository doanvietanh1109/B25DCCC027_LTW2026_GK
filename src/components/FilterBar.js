import { CATEGORIES } from '../data';

const FilterBar = ({ query, category, onQueryChange, onCategoryChange }) => (
  <div className="filters">
    <div className="form-field">
      <label htmlFor="search-query">Tìm kiếm</label>
      <input
        id="search-query"
        type="text"
        placeholder="Tìm kiếm theo tên khoản chi"
        value={query}
        onChange={onQueryChange}
      />
    </div>
    <div className="form-field">
      <label htmlFor="filter-category">Danh mục</label>
      <select id="filter-category" value={category} onChange={onCategoryChange}>
        <option value="Tất cả">Tất cả</option>
        {CATEGORIES.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  </div>
);

export default FilterBar;
