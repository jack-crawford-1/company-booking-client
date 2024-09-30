import { useState } from 'react';
import Calendar from 'react-calendar';
import BookingForm from './BookingForm';
import 'react-calendar/dist/Calendar.css';
import BookingDescription from './BookingDescription';

type Value = Date | Date[] | null;

const BookingSection = () => {
  const [value, setValue] = useState<Value>(new Date());
  const future30Days = new Date(Date.now() + 2592000000);

  return (
    <div
      id="booking-form"
      className="flex lg:flex-row flex-col justify-center items-center md:gap-20 md:pt-20 md:pb-20"
    >
      <div className="rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Select a Date
        </h2>
        <BookingDescription />
        <Calendar
          onChange={(value) => setValue(value as Date)}
          value={value as Date | null}
          minDate={new Date()}
          maxDate={future30Days}
        />
      </div>

      <div className="md:w-1/2">
        <BookingForm
          selectedDate={value instanceof Date ? value : new Date()}
        />
      </div>
    </div>
  );
};

export default BookingSection;
