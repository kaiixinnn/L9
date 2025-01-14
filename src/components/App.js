import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Diplomas from "./Diplomas";  // Updated import
import Diploma from "./Diploma";
import Header from "./Header";
import Register from "./Register";
import ModuleDetail from "./ModuleDetail";  // Import ModuleDetail

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />} />
          <Route path=":diplomaId/:moduleId" element={<ModuleDetail />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>
      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
