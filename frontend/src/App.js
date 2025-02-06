import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./components/navbar";
import UserHomePage from "./components/userHomePage";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <UserHomePage />
    </div>
  );
}

export default App;
