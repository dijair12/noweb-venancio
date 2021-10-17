import HomeHero from './components/HomeHero';
import KnowMore from './components/KnowMore';

import './global.scss';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <HomeHero />
      <KnowMore />
    </div>
  );
}

export default App;
