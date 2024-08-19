
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // استيراد ملف CSS

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    schoolyear: '',
    elsarat:'',
    elktae: '',
    apeletraf: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5653/api/users', formData)
      .then((response) => {
        console.log('Data saved:', response.data);
        setFormData({ name: '', address: '', email: '', phone: '',schoolyear: '',elsarat:'',elktae: '',apeletraf: '' });
      })
      .catch((error) => {
        console.error('There was an error saving the data!', error);
      });
  };

  return (
    <div className="form-container">
      <h1>تسجيل البيانات</h1>
      <form onSubmit={handleSubmit}>
        
      <input name="name" value={formData.name} onChange={handleChange} placeholder="الاسم" required />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="العنوان" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="البريد الإلكتروني" required />
        <input name="apeletraf" value={formData.apeletraf} onChange={handleChange} placeholder="اب الاعتراف" required />
        <input name="elktae" value={formData.elktae} onChange={handleChange} placeholder="الى اى قطاع تنتمى" required />
        <input name="elsarat" value={formData.elsarat} onChange={handleChange} placeholder="الشارات التى حصلت عليها" required />
        <input name="schoolyear" value={formData.schoolyear} onChange={handleChange} placeholder="السنة الدراسية" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="رقم الهلتف " required />
        

        <button type="submit">إرسال</button>
      </form>
    </div>
  );
}

export default App;
