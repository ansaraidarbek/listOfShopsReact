import React, { useState } from 'react';

const AddStoreModal = ({ addStore, toggleModal }) => {
  const [name, setName] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [distance, setDistance] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStore({ name, openingTime, distance, paymentMethod });
    setName('');
    setOpeningTime('');
    setDistance('');
    setPaymentMethod('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Opening Time:</label>
          <input type="text" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} required />
          <label>Distance from centre:</label>
          <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} required />
          <label>Payment method:</label>
          <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default AddStoreModal;
