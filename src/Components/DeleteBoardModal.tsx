import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../context/storeContext";

const DeleteBoardModal = ({ setdeleteBoardModal }) => {
  const { theme, store, setstore } = useContext(StoreContext);
  const active = store?.filter((board) => board.isActive);
  const divRef = useRef();
  const divRefHandler = (event: any) => {
    if (event.target === divRef.current) {
      setdeleteBoardModal(false);
    }
  };
  const deleteHandler = () => {
    setstore(store.filter((board) => board.isActive !== true));
    setdeleteBoardModal(false);
      const data = [...store.filter((board) => board.isActive !== true)];
      data[0].isActive = true;
      setstore(data);
  };
  return (
    <div
      onClick={(event) => divRefHandler(event)}
      ref={divRef}
      className="w-screen h-screen bg-[#0000005c] absolute z-20 flex justify-center items-center"
    >
      <div
        className={`w-[480px] h-[220px] ${
          theme ? "dark" : "light"
        } p-8 flex flex-col justify-between rounded-lg relative`}
      >
        <svg
          onClick={() => setdeleteBoardModal(false)}
          className="absolute -top-8 -right-8 cursor-pointer"
          width="15"
          height="15"
          fill="#585fc7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="evenodd">
            <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
            <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
          </g>
        </svg>

        <h1 className="text-[#ea5555] text-xl font-semibold">
          Delete this board?
        </h1>
        <p className="text-xs">{`Are you sure you want to delete the ‘${active[0]?.name}’ board? This action will remove all columns and tasks and cannot be reversed.`}</p>
        <div className="flex justify-between w-full mt-6">
          <button
            onClick={deleteHandler}
            className={`w-[200px] h-[39px] bg-[#ea5555] hover:bg-[#ea5555a9] text-white font-semibold rounded-3xl active:scale-95     `}
          >
            Delete
          </button>
          <button
            className={`w-[200px] h-[39px] font-semibold rounded-3xl text-[#585fc7]  ${
              theme ? "bg-white" : "bg-[#585fc71a] hover:bg-[#585fc749]"
            } active:scale-95`}
            onClick={() => setdeleteBoardModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBoardModal;
