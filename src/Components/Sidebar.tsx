import React, { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";
import Board from "./Board";
import NewBoardBut from "./NewBoardBut";
import ThemeSwitcher from "./ThemeSwitcher";
import HideSidebar from "./HideSidebar";
import OpenSidebar from "./OpenSidebar";
import CreateNewBoard from "./CreateNewBoard";

interface BoardProps {
  name: string;
  isActive: boolean;
  columsn: {}[];
}

const Sidebar = () => {
  const { store, setstore, theme, settheme, sideBar, setsideBar } =
    useContext(StoreContext);
    const [newBoardModal, setnewBoardModal] = useState(false)
    
  return (
    <>
        <div
          className={`w-[300px] z-10  ${
            theme ? "dark" : "light"
          } flex flex-col  ${!sideBar&&'-translate-x-[300px] w-0'} border-r ${theme?'border-gray-700':''}`}
        >
          <div className="w-full h-[25rem] mt-8">
            <p className="ml-8 my-4 tracking-widest text-xs font-bold">
              ALL BOARDS ({store.length})
            </p>
            <div className="w-[95%] flex flex-col">
              {store.map((board: BoardProps, index: number) => (
                <Board
                  key={index}
                  name={board.name}
                  isActive={board.isActive}
                  index={index}
                />
              ))}
              <NewBoardBut setnewBoardModal={setnewBoardModal} />
            </div>
          </div>
          <ThemeSwitcher />
          <HideSidebar />
          {newBoardModal&&(
            <CreateNewBoard setnewBoardModal={setnewBoardModal} />
           )}
        </div>
           <OpenSidebar  />
    </>
  );
};

export default Sidebar;
