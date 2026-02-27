import { useState } from 'react'

function SearchFilter({ onFilterChange }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const handleSearchChange = (value) => {
    setSearch(value)
    onFilterChange({ search: value, filter })
  }

  const handleFilterChange = (value) => {
    setFilter(value)
    onFilterChange({ search, filter: value })
  }

  return (
    <div className="search-filter-bar">
      <input
        type="text"
        placeholder="🔍 Search courses..."
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="search-input"
      />
      <select value={filter} onChange={(e) => handleFilterChange(e.target.value)} className="filter-select">
        <option value="all">All Courses</option>
        <option value="available">Available Only</option>
        <option value="cs">Computer Science</option>
        <option value="math">Mathematics</option>
        <option value="eng">English</option>
      </select>
    </div>
  )
}

export default SearchFilter
