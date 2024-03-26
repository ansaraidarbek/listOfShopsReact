import React, { useState } from 'react';
import StoreTable from './StoreTable';
import AddStoreModal from './AddStoreModal';

console.log("here")
const App = () => {
  const initialStores = [
    { name: 'Shop 1', openingTime: '09:00', distance: '5 km', paymentMethod: 'Cart' },
    { name: 'Shop 2', openingTime: '10:00', distance: '3 km', paymentMethod: 'Cash' },
    { name: 'Shop 3', openingTime: '08:00', distance: '7 km', paymentMethod: 'Cart' },
  ];

  const [stores, setStores] = useState(initialStores);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleModal = () => setShowModal(!showModal);

  const addStore = (newStore) => {
    setStores([...stores, newStore]);
    toggleModal();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (type) => {
    if (type === sortType) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  const sortedStores = [...stores].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * (a[sortType].localeCompare(b[sortType]));
  });

  const filteredStores = sortedStores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Shops list</h1>
      <button onClick={toggleModal}>Add Shop</button>
      <input
        type="text"
        placeholder="Search by shop name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <StoreTable
        stores={filteredStores}
        handleSort={handleSort}
        sortType={sortType}
        sortOrder={sortOrder}
      />
      {showModal && <AddStoreModal addStore={addStore} toggleModal={toggleModal} />}
    </div>
  );
};

export default App;
