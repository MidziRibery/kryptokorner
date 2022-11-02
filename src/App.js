import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' />
        </Routes> 
      </Router>

      <h1>Test Clean Slate</h1>
 
    </div>
  );
}

export default App;
