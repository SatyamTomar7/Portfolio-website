import Home from "./Pages/Home";

function App() {
  return (
    <div className="app-shell">
      <div className="animated-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
      <div className="app-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
