import "./App.css";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Body from "./components/Body.js";
import { useState } from "react";
function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="bg-zinc-900 full h-screen">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Sidebar />
      <Body accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
