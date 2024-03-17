import { Header } from './components';
import Footer from './components/footer';
import { Home } from './pages';

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
