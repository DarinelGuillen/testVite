import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        </Routes>
        </BrowserRouter>
     );
}

export default App;