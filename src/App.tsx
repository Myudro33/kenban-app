import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import { StoreContext } from "./context/storeContext";
import data from "./data.json";
import { setActiveBoard } from "./context/storeContext";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";

const initStore = data.boards;
const bgColor = false;
const initSidebar = true;
const getInitialSideBar = () => {
  const sideBar = localStorage.getItem("sidebar");
  return sideBar ? JSON.parse(sideBar) : initSidebar;
};
const getInitialState = () => {
  const store = localStorage.getItem("store");
  return store ? JSON.parse(store) : initStore;
};
const getInitialTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? JSON.parse(theme) : bgColor;
};
function App() {
  const [store, setstore] = useState<typeof data>(getInitialState);
  const [theme, settheme] = useState(getInitialTheme);
  const [sideBar, setsideBar] = useState(getInitialSideBar);
  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store]);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("sidebar", JSON.stringify(sideBar));
  }, [sideBar]);
  return (
    <div
      className={`w-full h-screen flex flex-col ${
        theme ? "bodyDark" : "bodyLight"
      }`}
    >
      <StoreContext.Provider
        value={{
          store,
          setstore,
          data,
          theme,
          settheme,
          setActiveBoard,
          sideBar,
          setsideBar,
        }}
      >
        <Navbar />
        <div className={`container flex`}>
          <Sidebar />
          <Container/>  
        </div>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
