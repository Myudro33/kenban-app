import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../context/storeContext";

const EditBoard = ({ seteditBoard,seteditBoardModal,setdeleteBoardModal }: any) => {
  const { theme } = useContext(StoreContext);
  const divRef = useRef<any>();
  const editRef = useRef<any>();
  const deleteRef = useRef<any>();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        event.target !== editRef.current &&
        event.target !== deleteRef.current
      ) {
        if (divRef.current !== event.target) {
          seteditBoard(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  const editBoardHandler = () =>{
    seteditBoard(false)
    seteditBoardModal(true)
  }
  const deleteBoardHandler = () =>{
    seteditBoard(false)
    setdeleteBoardModal(true)
  }

  return (
    <div
      ref={divRef}
      className={`absolute right-8 top-20 w-[192px] h-[94px] ${
        theme ? "dark" : "light"
      } shadow-lg rounded-md p-4 flex flex-col justify-around z-20`}
    >
      <p onClick={editBoardHandler} ref={editRef} className='cursor-pointer hover:underline  font-semibold   text-sm'>Edit Board</p>
      <p onClick={deleteBoardHandler} ref={deleteRef} className='text-red-500 cursor-pointer   font-semibold text-sm hover:underline' >Delete Board</p>
    </div>
  );
};

export default EditBoard;
