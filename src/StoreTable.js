import React from 'react';

const StoreTable = ({ stores, handleSort, sortType, sortOrder }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name {sortType === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
          <th onClick={() => handleSort('openingTime')}>Opening Time {sortType === 'openingTime' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
          <th onClick={() => handleSort('distance')}>Distance from centre {sortType === 'distance' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
          <th onClick={() => handleSort('paymentMethod')}>Payment method {sortType === 'paymentMethod' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
        </tr>
      </thead>
      <tbody>
        {stores.map((store, index) => (
          <tr key={index}>
            <td>{store.name}</td>
            <td>{store.openingTime}</td>
            <td>{store.distance}</td>
            <td>{store.paymentMethod}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StoreTable;
