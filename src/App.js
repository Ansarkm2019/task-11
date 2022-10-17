import "./App.css";
import Vorgez from "./components/screens/Vorgez";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Graphpage from "./components/Pages/Graphpage";
import Guestpagelist from "./components/Pages/Guestpagelist";
import Nomactch from "./components/screens/Nomactch";
import Soon from "./components/screens/Soon";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Vorgez />} />
					<Route path="/graph" element={<Graphpage />} />
					<Route
						path="/guestlist"
						element={<Guestpagelist />}
					/>
					<Route path="/soon" element={<Soon />} />
					<Route path="*" element={<Nomactch />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
