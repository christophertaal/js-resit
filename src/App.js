import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Grass from './Pages/Grass';
import Home from './Pages/Home';
import PokemonDetail from './Pages/PokemonDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/grass" component={Grass} exact/>
      <Route path="/contact" component={Contact} exact/>
      <Route path="/pokemon/:name" component={PokemonDetail} exact/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
