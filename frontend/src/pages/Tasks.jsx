// src/pages/Tasks.jsx
import { useEffect, useState } from 'react';
import api from '../api/axios';

export default function Tasks() {
  const [message, setMessage] = useState('در حال بررسی اتصال...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        // تلاش برای گرفتن لیست تسک‌ها از بک‌اند
        const response = await api.get('/tasks/');
        setMessage('✅ اتصال موفقیت‌آمیز بود! دیتا دریافت شد.');
        console.log('Data from backend:', response.data);
      } catch (error) {
        // اگر ارور داد، ببینیم چه اروری بوده
        if (error.response) {
          // اگر بک‌اند جواب داد ولی مثلاً گفت توکن نداری (ارور 401)
          if (error.response.status === 401) {
            setMessage('✅ اتصال برقراره! (بک‌اند گفت برای دیدن تسک‌ها باید لاگین کنی - ارور 401)');
          } else {
            setMessage(`❌ بک‌اند جواب داد ولی ارور داد: ${error.response.status}`);
          }
        } else {
          // اگر کلاً بک‌اند پیدا نشد (مثلاً خاموشه یا CORS مشکل داره)
          setMessage('❌ اتصال برقرار نشد! (بک‌اند خاموشه یا مشکل CORS داریم)');
          console.error('Connection Error:', error);
        }
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">صفحه مدیریت تسک‌ها</h1>
      
      {/* این باکس نتیجه تست رو نشون میده */}
      <div className={`p-4 rounded-lg border ${message.includes('✅') ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800'}`}>
        <p className="font-bold">وضعیت اتصال به بک‌اند:</p>
        <p>{message}</p>
      </div>

      <p className="text-gray-600 mt-4">برای دیدن جزئیات دقیق‌تر، کلید F12 رو بزن و تب Console رو چک کن.</p>
    </div>
  );
}