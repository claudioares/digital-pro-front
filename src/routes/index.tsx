import { Route, Routes } from "react-router-dom";
import { Login } from '../login';
import App from '../App';
import { Home } from "../home";
import { Subscribe } from "../subscribe";


export function MainRouter () {
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/subscribe' element={<Subscribe />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}