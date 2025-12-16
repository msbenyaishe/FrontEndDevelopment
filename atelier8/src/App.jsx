import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
          <NavBar />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:genre/:id" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    )
}

export default App;