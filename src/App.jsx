import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ThreeDView from "./pages/ThreeDView.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/3d-view" element={<ThreeDView />} />
      </Routes>
    </Router>
  );
}

export default App;
