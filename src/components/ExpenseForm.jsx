import React from 'react';
import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0]
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.date) return;
    
    const newExpense = {
      ...formData,
      amount: parseFloat(formData.amount),
      date: formData.date 
    };
    
    onAddExpense(newExpense);
    setFormData({
      description: '',
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0] 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Amount ($):</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          min="0.01"
          step="0.01"
          required
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="add-button">submit</button>
    </form>
  );
}


export default ExpenseForm;