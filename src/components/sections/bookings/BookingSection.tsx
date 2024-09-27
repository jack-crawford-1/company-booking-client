import { useState } from 'react';
import Calendar from 'react-calendar';
import BookingForm from './BookingForm';
import 'react-calendar/dist/Calendar.css';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  return (
    <div className=" flex flex-row justify-center items-start gap-20 mt-10">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Select a Date
        </h2>
        <Calendar
          className=""
          onChange={handleDateChange}
          value={selectedDate}
          minDetail="month"
          next2Label={null}
          prev2Label={null}
          activeStartDate={new Date()}
          showNeighboringMonth={false}
        />
      </div>

      <div className="w-1/2">
        <BookingForm selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default BookingSection;
