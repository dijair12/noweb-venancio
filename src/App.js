import HomeHero from './components/HomeHero';
import KnowMore from './components/KnowMore';
import AboutUs from './components/AboutUs';
import Gastronomy from './components/Gastronomy';
import Contats from './components/Contats';
import Footer from './components/Footer';

import './global.scss';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <HomeHero />
      </header>
      <main>
        <KnowMore />
        <AboutUs />
        <Gastronomy />
      </main>
      <footer>
        <Contats />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
