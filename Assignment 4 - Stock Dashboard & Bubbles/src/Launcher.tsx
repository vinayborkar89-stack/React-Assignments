import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Stock1 from './Components/Stock1';
import Stock2 from './Components/Stock2';
import Bubble from './Components/Bubble';

function Launcher() {
    return (
        <>
            <hr></hr>
            <Link to="/">Home</Link> {" | "}
            <Link to="/dashboard">Dashboard</Link> {" | "}
            <Link to="/stock1">Stock 1</Link> {" | "}
            <Link to="/stock2">Stock 2</Link> {" | "}
            <Link to="/bubble">Bubble</Link>
            <hr></hr>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/stock1" element={<Stock1 />} />
                <Route path="/stock2" element={<Stock2 />} /> 
                <Route path="/bubble" element={<Bubble />} />               
            </Routes>
        </>
    );
}
export default Launcher;