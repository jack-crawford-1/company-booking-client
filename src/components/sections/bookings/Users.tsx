import { useEffect, useState } from 'react';
import { fetchUsers } from '../../../api/fetchBookings';

const Users = () => {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchUsers();
        setUsers(result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Users</h2>
      <table className="table-auto w-full text-left bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">ID</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {users.map((user, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <td className="py-3 px-6">{user.id}</td>
              <td className="py-3 px-6">{user.name}</td>
              <td className="py-3 px-6">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
