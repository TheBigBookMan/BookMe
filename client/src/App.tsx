import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
    return (
        <div className="h-screen w-screen">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<Book />} />
            </Routes>
        </div>
    );
}

export default App;
