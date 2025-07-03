import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Thank You';
  }, []);

  return (
    <section className="py-20 bg-white min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-10 rounded-2xl shadow-lg max-w-lg text-center animate-fade">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your message has been successfully sent. I’ll get back to you soon.
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default ThankYou;
