import { useState } from 'react';
import Calendar from 'react-calendar';
import BookingForm from './BookingForm';
import 'react-calendar/dist/Calendar.css';
import BookingDescription from './BookingDescription';

type Value = Date | [Date, Date];

const BookingSection = () => {
  const [value, setValue] = useState<Value>(new Date());
  const futureAsDate = new Date(Date.now() + 2592000000);

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center md:gap-20 md:mt-10">
      <div className="rounded-lg p-6">
        <h2 className="pt-10 text-2xl font-semibold mb-4 text-center">
          Select a Date
        </h2>
        <BookingDescription />
        <Calendar
          onChange={(value) => setValue(value)}
          value={value}
          next2Label={null}
          prev2Label={null}
          minDate={new Date()}
          maxDate={futureAsDate}
        />
      </div>

      <div className="md:w-1/2">
        <BookingForm selectedDate={Array.isArray(value) ? value[0] : value} />
      </div>
    </div>
  );
};

export default BookingSection;
