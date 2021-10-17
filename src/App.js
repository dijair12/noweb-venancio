import HomeHero from './components/HomeHero';
import KnowMore from './components/KnowMore';
import AboutUs from './components/AboutUs';

import './global.scss';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <HomeHero />
      <KnowMore />
      <AboutUs />
    </div>
  );
}

export default App;
