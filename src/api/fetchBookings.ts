export async function fetchUsers() {
  try {
    const res = await fetch('http://localhost:3000/v1/users');

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching:', error);
    return [];
  }
}

export async function fetchAppointments() {
  try {
    const res = await fetch('http://localhost:3000/v1/appointments');

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data.appointments;
  } catch (error) {
    console.error('Error fetching:', error);
    return [];
  }
}

export async function fetchTimeslots() {
  try {
    const res = await fetch('http://localhost:3000/v1/timeslots');

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data.timeslots;
  } catch (error) {
    console.error('Error fetching:', error);
    return [];
  }
}
