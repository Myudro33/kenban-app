import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/storeContext";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import dots from "../assets/icon-vertical-ellipsis.svg";
import AddNewTask from "./AddNewTask";
import EditBoard from "./EditBoard";
import EditBoardModal from "./EditBoardModal";
import DeleteBoardModal from "./DeleteBoardModal";
interface selectedProps {
  name: string;
  isActive: boolean;
  columns: [];
}

const Navbar = () => {
  const { theme, sideBar, store } = useContext(StoreContext);
  const [selected, setselected] = useState<any>();
  const [newTask, setnewTask] = useState(false);
  const [editBoard, seteditBoard] = useState<boolean>(false);
  const [editBoardModal, seteditBoardModal] = useState<boolean>(false);
  const [deleteBoardModal, setdeleteBoardModal] = useState<boolean>(false);

  useEffect(() => {
    const selectedBoard = [
      ...store.filter((item: selectedProps) => item.isActive === true),
    ];
    setselected(selectedBoard);
  }, [store]);

  return (
    <div className={`w-full h-[96px] flex ${theme ? "dark" : "light"}`}>
      <div
        className={`${
          sideBar ? "w-[300px]" : "w-[210px] border-b "
        }  pl-4 pr-6 flex items-center border-r ${
          theme ? "border-gray-700" : ""
        } `}
      >
        <img
          className="w-[153px] h-[26px]"
          src={theme ? logoLight : logoDark}
          alt="logo"
        />
      </div>
      <div
        className={`px-6 h-full flex justify-between items-center border-b ${
          theme ? "border-gray-700" : ""
        } ${sideBar ? "navbarThin" : "navbarWide"} `}
      >
        {selected && (
          <h1
            className={`font-semibold text-lg ${
              theme ? "text-[#fff]" : "text-[#000]"
            }`}
          >
            {selected[0]?.name}
          </h1>
        )}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setnewTask(true)}
            className="w-[162px] h-[47px] font-semibold text-white text-base bg-[#585fc7] rounded-3xl active:scale-95"
          >
            + Add New Task
          </button>
          <img
            onClick={() => seteditBoard((prev) => !prev)}
            className="ml-4 cursor-pointer"
            src={dots}
            alt="dots"
          />
        </div>
      </div>
      {newTask && <AddNewTask setnewTask={setnewTask} selected={selected} />}
      {editBoard && (
        <EditBoard
          seteditBoard={seteditBoard}
          seteditBoardModal={seteditBoardModal}
          setdeleteBoardModal={setdeleteBoardModal}
        />
      )}
      {editBoardModal && (
        <EditBoardModal
          selected={selected[0]}
          seteditBoardModal={seteditBoardModal}
        />
      )}
      {deleteBoardModal && (
        <DeleteBoardModal setdeleteBoardModal={setdeleteBoardModal} />
      )}
    </div>
  );
};

export default Navbar;
