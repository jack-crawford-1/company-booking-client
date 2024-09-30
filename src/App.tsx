import './index.css';
import Hero from './components/sections/Hero';
import Nav from './components/sections/Nav';
import TeamMembers from './components/sections/team-members/TeamMembers';
import BookingSection from './components/sections/bookings/BookingSection';
import Footer from './components/sections/Footer';
import Spacer from './components/sections/Spacer';

const App = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <Hero />
      <Spacer colour={'lavender'} />
      <TeamMembers />
      <Spacer colour={'slategray'} />
      <BookingSection />
      <Spacer colour={'dimgray'} />
      <Spacer colour={'gainsboro'} />
      <Spacer colour={'ghostwhite'} />
      <Spacer colour={'darkgray'} />
      <Footer />
    </div>
  );
};

export default App;
