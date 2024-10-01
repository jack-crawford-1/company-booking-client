import { useEffect, useState } from 'react';
import { fetchTimeslots } from '../../../api/fetchBookings';

const Timeslots = () => {
  interface Timeslot {
    id: number;
    start_date: string;
    start_time: string;
    end_date: string;
    end_time: string;
    is_booked: boolean;
  }

  const [timeslots, setTimeslots] = useState<Timeslot[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTimeslots();
        setTimeslots(result);
      } catch (error) {
        console.error('Error fetching timeslots:', error);
      }
    };
    fetchData();
  }, []);

  const formattedTimeslots = timeslots.map((timeslot) => {
    const formattedStartDate = new Date(timeslot.start_date)
      .toISOString()
      .split('T')[0];
    const formattedEndDate = new Date(timeslot.end_date)
      .toISOString()
      .split('T')[0];
    return {
      ...timeslot,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    };
  });

  return (
    <div className="flex justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Timeslots</h2>
      <table className="table-auto w-full text-left bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">ID</th>
            <th className="py-3 px-6">Start Date</th>
            <th className="py-3 px-6">Start Time</th>
            <th className="py-3 px-6">End Date</th>
            <th className="py-3 px-6">End Time</th>
            <th className="py-3 px-6">isBooked</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {formattedTimeslots.map((timeslot, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <td className="py-3 px-6">{timeslot.id}</td>
              <td className="py-3 px-6">{timeslot.start_date}</td>
              <td className="py-3 px-6">{timeslot.start_time}</td>
              <td className="py-3 px-6">{timeslot.end_date}</td>
              <td className="py-3 px-6">{timeslot.end_time}</td>
              <td className="py-3 px-6">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    timeslot.is_booked
                      ? 'bg-red-200 text-red-800'
                      : 'bg-green-200 text-green-800'
                  }`}
                >
                  {timeslot.is_booked ? 'Yes' : 'No'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timeslots;
