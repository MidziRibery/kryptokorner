import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NFT from './components/pages/NFT';
import KryptoKnowledge from './components/pages/KryptoKnowledge';
import Subscribe from './components/pages/Subscribe';
import Bitcoin from './components/pages/Bitcoin';
import Ethereum from './components/pages/Ethereum';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element= {<Home/>}/>
          <Route exact path='/nfts' element= {<NFT/>}/>
          <Route exact path='/knowledge' element= {<KryptoKnowledge/>}/>
          <Route exact path='/subscribe' element= {<Subscribe/>}/>
          <Route exact path='/bitcoin' element= {<Bitcoin/>}/>
          <Route exact path='/ethereum' element= {<Ethereum/>}/>
        </Routes> 
      </Router>
      

    </div>
  );
}

export default App;
