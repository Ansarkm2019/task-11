import './App.css';
import Vorgez from './components/screens/Vorgez';
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import Graphpage from './components/Pages/Graphpage';
import Guestpagelist from './components/Pages/Guestpagelist';
import Nomactch from './components/screens/Nomactch';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Vorgez />}/>
      </Routes>
      <Routes>
        <Route path="/graph" element={<Graphpage />}/>
      </Routes>
      <Routes>
        <Route path="/guestlist" element={<Guestpagelist />}/>
      </Routes>
      <Routes>
        <Route path="*" element={<Nomactch />}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
