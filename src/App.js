import './App.css';
import Vorgez from './components/screens/Vorgez';
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import Grapht from './components/screens/Grapht';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Vorgez />}/>
      </Routes>
      <Routes>
        <Route path="/graph" element={<Grapht />}/>
      </Routes>
    
    </Router>
      
    </>
  );
}

export default App;
