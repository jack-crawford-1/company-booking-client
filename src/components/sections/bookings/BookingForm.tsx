import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BookingFormProps {
  selectedDate: Date;
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedDate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      date: selectedDate.toLocaleDateString('en-CA'),
    }));
  }, [selectedDate]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      formData.time.trim() === '' ||
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.message.trim() === ''
    ) {
      toast.error('Please fill in all fields', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      return;
    }

    toast.success('Your booking has been submitted!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  const availableTimes = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  return (
    <div className="md:w-[600px] w-[400px]">
      <div className="w-full mx-auto bg-black opacity-90 rounded-lg m-5 p-10">
        <h1 className="text-2xl font-bold mb-4 text-gray-200">
          New Booking Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Name:
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Email:
              <input
                type="email"
                name="email"
                placeholder="john.doe@xtra.co.nz"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Date:
              <input
                type="date"
                name="date"
                // readOnly
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Preferred Time:
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black"
              >
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 min-h-[100px] border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black"
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 min-w-[250px]"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  message: '',
                  time: '',
                  name: '',
                  email: '',
                })
              }
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 min-w-[250px]"
            >
              Clear
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
