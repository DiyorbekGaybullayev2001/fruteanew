/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useStore from '../store/teaStore.js';

function Login() {
  const navigate = useNavigate();
  const [view, setView] = useState('login'); 
  const [formData, setFormData] = useState({
	firstName: '',
	lastName: '',
	phone: '+998',
	password: '',
})
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setUser = useStore(state => state.setUser)

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token); 
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target
		setFormData(prev => ({
			...prev,
			[id]: value,
		}))
  };

const handleSubmit = async (e) => {
	e.preventDefault();
	try {
	  const endpoint =
		view === 'signup'
		  ? 'http://209.38.30.188:8347/auth/signup'
		  : view === 'forgot'
		  ? 'http://209.38.30.188:8347/auth/send-sms'
		  : 'http://209.38.30.188:8347/auth/signin';
  
	  const response = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(formData)
	  });
  
	  const result = await response.json();
	  
	  if (response.ok ) {
		const { accessToken, refreshToken } = result.data || {};
		if (accessToken?.token && refreshToken?.token) {
		  localStorage.setItem('accessToken', accessToken.token);
		  localStorage.setItem('refreshToken', refreshToken.token);
  
		  setUser({
			auth: true,
			user: {
			  data: { ...result.data, formData },
			  success: true,
			  token: accessToken,
			  refreshToken,
			},
			version: 0,
		  });
  
		  setIsAuthenticated(true); 
		  toast.success('Request successful!');
		  navigate('/'); 
		} else {
		  toast.error('No token received.');
		}
	  } else {
		toast.error(result?.message || 'Request failed.');
	  }
	} catch (error) {
	  console.error('Error:', error);
	  toast.error('Something went wrong!');
	}
  };
  

  if (isAuthenticated) return null; 

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-96 p-6 border rounded-md shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {view === 'signup'
              ? "Ro'yxatdan o'tish"
              : view === 'forgot'
              ? 'Parolni tiklash'
              : 'Kirish'}
          </h2>
          <button
            className="text-lg font-semibold bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            onClick={() => navigate('/')}
          >
            x
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {view === 'signup' && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                  Ismingizni kiriting:
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  placeholder="Ism"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                  Familiyangizni kiriting:
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Familiya"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Tel:
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+998"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {view !== 'forgot' && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Parolni kiriting:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Parol"
                className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
          >
            {view === 'signup' ? 'Yuborish' : view === 'forgot' ? 'Tiklash' : 'Kirish'}
          </button>
        </form>

        <div className="mt-4 text-center">
          {view === 'login' && (
            <>
              <a
                href="#"
                onClick={() => setView('signup')}
                className="text-blue-500 hover:underline text-sm block"
              >
                Ro'yxatdan o'tish →
              </a>
              <a
                href="#"
                onClick={() => setView('forgot')}
                className="text-blue-500 hover:underline text-sm block"
              >
                Parolni unutdingizmi? →
              </a>
            </>
          )}
          {view !== 'login' && (
            <a
              href="#"
              onClick={() => setView('login')}
              className="text-blue-500 hover:underline text-sm block"
            >
              Kirish →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
