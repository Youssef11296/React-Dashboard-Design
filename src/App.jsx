import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__showcase">
        <Stats />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
