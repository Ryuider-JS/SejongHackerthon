import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

export default function App() {
    return (
        <Routes>
            <Route path="/landing" element={<Landing />}></Route>
            <Route path="/main" element={<Main />}></Route>
        </Routes>
    );
}
