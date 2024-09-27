import { useState, useEffect } from 'react';

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
      date: selectedDate.toISOString().substring(0, 10),
    }));
  }, [selectedDate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-[600px]">
      <div className="w-full mx-auto bg-black rounded-lg m-5 p-10">
        <h1 className="text-2xl font-bold mb-4 text-gray-200">Booking Form</h1>

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
                readOnly
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Time:
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-10 border border-gray-300 rounded-md focus:ring-green-500 ring-4 sm:text-sm text-black "
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-3 mt-2 mb-2 hover:bg-gray-700 min-w-[250px] hover:border-green-500  border-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
