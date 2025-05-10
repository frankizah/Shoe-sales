import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer'; // 👈 Add this

const MakePayment = () => {
  const location = useLocation();
  const [totalCost, setTotalCost] = useState(location.state?.totalCost || 0);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Fallback in case of page reload
  useEffect(() => {
    if (!location.state?.totalCost) {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const computedTotal = storedCart.reduce((sum, item) => sum + Number(item.product_cost), 0);
      setTotalCost(computedTotal);
    }
  }, [location.state]);

  const submit = (e) => {
    e.preventDefault();

    if (phone.length < 10) {
      setMessage('Please enter a valid Mpesa number');
      return;
    }

    setMessage(`Payment of ${totalCost} KES initiated for number ${phone}.`);
    // Optionally clear cart after payment
  };

  return (
    <>
      <div className='row justify-content-center mt-3'>
        <h1 className='text-danger text-center'>Lipa na Mpesa</h1>
        <div className="col-md-6 card shadow p-3">
          <b className='text-success'>{message}</b>

          <h4>Total Amount to Pay: <span className='text-primary'>{totalCost} KES</span></h4>

          <form onSubmit={submit}>
            <input
              type="number"
              placeholder='Enter your Mpesa number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='form-control'
            />
            <br />
            <button className='btn btn-success'>Make Payment</button>
          </form>
        </div>
      </div>
      <Footer /> {/* 👈 Add Footer at the bottom */}
    </>
  );
};

export default MakePayment;
