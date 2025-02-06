import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./components/navbar";
import ProfileCards from "./components/Card";
import FeedCards from "./components/feed";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <ProfileCards />
      <FeedCards />
    </div>
  );
}

export default App;
