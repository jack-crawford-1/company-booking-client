import './index.css';
import Hero from './components/sections/Hero';
import Nav from './components/sections/Nav';
import TeamMembers from './components/sections/TeamMembers';
import BookingSection from './components/sections/bookings/BookingSection';

const App = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <Hero />
      <TeamMembers />
      <BookingSection />
    </div>
  );
};

export default App;
