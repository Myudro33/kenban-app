import React, { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";

const ColumnTask = ({ task }: any) => {
const [hover, sethover] = useState(false)
  const { theme } = useContext(StoreContext);
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
  return (
    <div
    onMouseEnter={()=>sethover(true)}
    onMouseLeave={()=>sethover(false)}
      className={`px-4 py-6 ${
        theme ? "dark" : "light"
      } my-3 rounded-lg shadow-md w-full cursor-pointer `}
    >
      <h1
        className={`text-base ${hover&&'text-[#585fc9]'}  ${
          theme ? "text-[#fff]" : "text-[#000]"
        } font-semibold  `}
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
