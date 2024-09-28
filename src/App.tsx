import './index.css';
import Hero from './components/sections/Hero';
import Nav from './components/sections/Nav';
import TeamMembers from './components/sections/team-members/TeamMembers';
import BookingSection from './components/sections/bookings/BookingSection';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <Hero />
      <TeamMembers />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default App;
