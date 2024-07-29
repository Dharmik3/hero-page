import { Navbar, Sidebar } from "./components";
import DiagnosisPage from "./Pages/DiagnosisPage";
import "./App.css";

const App = () => (
  <div className="container">
    <Navbar />
    <main>
      <Sidebar />
      <DiagnosisPage />
    </main>
  </div>
);

export default App;
