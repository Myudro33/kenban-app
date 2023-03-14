import React, { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";
import TaskModal from "./TaskModal";

const ColumnTask = ({ task }: any) => {
const [hover, sethover] = useState(false)
  const { theme,taskModal,settaskModal,taskInfo, settaskInfo } = useContext(StoreContext);
  const countCompletedSubtasks = (subtasks: any) => {
    let count = 0;
    subtasks.map((task: any) => {
      if (task.isCompleted === true) {
        count++;
      }
      return count;
    });
    return count;
  };  

  const clickHandler = ()=>{
    settaskModal(true)
    settaskInfo(task)
  }
  return (
    <div
    onMouseEnter={()=>sethover(true)}
    onMouseLeave={()=>sethover(false)}
    onClick={clickHandler}
      className={`px-4 py-6 ${
        theme ? "dark" : "light"
      } my-3 rounded-lg shadow-md w-[300px] cursor-pointer`}
    >
      <h1
        className={`text-base 
        ${hover?'text-[#585fc7]':theme?'text-white':'text-black'} 
          font-semibold`}
      >
        {task.title}
      </h1>
      <p className="mt-2 font-semibold ">
        {countCompletedSubtasks(task.subtasks)} of {task.subtasks.length}{" "}
        subtasks
      </p>
    </div>
  );
};

export default ColumnTask;
