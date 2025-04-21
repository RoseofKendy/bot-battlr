import React from 'react';

function SortBar({ sortBy, onSort, botClasses, filters, onFilter }) {
  return (
    <div className="sort-bar">
      <div className="sort-options">
        <h3>Sort By:</h3>
        <button 
          className={sortBy === 'health' ? 'active' : ''} 
          onClick={() => onSort('health')}
        >
          Health
        </button>
        <button 
          className={sortBy === 'damage' ? 'active' : ''} 
          onClick={() => onSort('damage')}
        >
          Damage
        </button>
        <button 
          className={sortBy === 'armor' ? 'active' : ''} 
          onClick={() => onSort('armor')}
        >
          Armor
        </button>
        <button 
          onClick={() => onSort('')}
        >
          Clear Sort
        </button>
      </div>
      <div className="filter-options">
        <h3>Filter By Class:</h3>
        {botClasses.map(botClass => (
          <label key={botClass}>
            <input
              type="checkbox"
              checked={filters.includes(botClass)}
              onChange={() => onFilter(botClass)}
            />
            {botClass}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SortBar;