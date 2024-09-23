import './index.css';
import Hero from './components/sections/Hero';
import Nav from './components/sections/Nav';
import About from './components/sections/About';
import TeamMembers from './components/sections/TeamMembers';

const App = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <Hero />
      <TeamMembers />
      <About />
    </div>
  );
};

export default App;
