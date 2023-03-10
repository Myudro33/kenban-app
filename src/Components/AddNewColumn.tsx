import React, { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";

const AddNewColumn = () => {
  const { theme,seteditBoardModal } = useContext(StoreContext);
  const [hover, sethover] = useState(false)
  return (
    <div
    onMouseEnter={()=>sethover(true)}
    onMouseLeave={()=>sethover(false)}
    onClick={()=>seteditBoardModal(true)}
      className={`w-[300px] h-[75vh] shrink-0 ${theme?'bg-[#252530]':'bg-[#fff]'} mt-16 mx-6 flex items-center justify-center rounded-lg cursor-pointer text-[#828fa3] `}
    >
      <h1 className={`text-2xl font-semibold  ${hover&&'text-[#585fc8]'}`} >+ New Column</h1>
    </div>
  );
};

export default AddNewColumn;
