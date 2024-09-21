import './index.css';
import Hero from './components/sections/Hero';
import Nav from './components/sections/Nav';

const App = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <Hero />
    </div>
  );
};

export default App;
