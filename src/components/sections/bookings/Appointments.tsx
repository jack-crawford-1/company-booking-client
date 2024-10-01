import { useEffect, useState } from 'react';
import { fetchAppointments } from '../../../api/fetchBookings';

const Appointments = () => {
  interface Appointments {
    id: number;
    user_id: number;
    timeslot_id: number;
    is_confirmed: boolean;
  }

  const [appointments, setAppointments] = useState<Appointments[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAppointments();
        setAppointments(result);
      } catch (error) {
        console.error('Error fetching appointment:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Appointments</h2>
      <table className="table-auto w-full text-left bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">ID</th>
            <th className="py-3 px-6">User ID</th>
            <th className="py-3 px-6">Timeslot ID</th>
            <th className="py-3 px-6">isConfirmed</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {appointments.map((appointment, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <td className="py-3 px-6">{appointment.id}</td>
              <td className="py-3 px-6">{appointment.user_id}</td>
              <td className="py-3 px-6">{appointment.timeslot_id}</td>
              <td className="py-3 px-6">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    appointment.is_confirmed
                      ? 'bg-green-200 text-green-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {appointment.is_confirmed ? 'Yes' : 'No'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
