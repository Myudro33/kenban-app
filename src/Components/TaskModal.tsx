import React, { useContext, useRef } from "react";
import { StoreContext } from "../context/storeContext";
import dots from '../assets/icon-vertical-ellipsis.svg'

const TaskModal = () => {
  const divRef = useRef();
  const { theme, settaskModal, taskInfo, settaskInfo, selected } =
    useContext(StoreContext);
  const divRefHandler = (event: any) => {
    if (event.target === divRef.current) {
      settaskModal(false);
    }
  };
  console.log(taskInfo);

  return (
    <div
      onClick={(event) => divRefHandler(event)}
      ref={divRef}
      className="w-screen h-screen bg-[#0000005c] absolute z-20 flex justify-center items-center"
    >
      <div
        className={`w-[480px] ${
          theme ? "dark" : "light"
        } p-8 flex flex-col justify-between rounded-lg relative`}
      >
        <svg
          onClick={() => settaskModal(false)}
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
        <div className="w-full flex items-center justify-between" >
          <h1
            className={`${
              theme ? "text-white" : "text-black"
            } text-lg font-semibold my-2 w-[95%]`}
          >
            {taskInfo?.title}
          </h1>
          <img className="cursor-pointer" src={dots} alt="" />
        </div>
        <p className="text-sm my-2">{taskInfo?.description}</p>
        <label
          className={`${
            theme ? "text-white" : "text-black"
          } text-sm font-semibold my-2`}
        >
          Subtasks (0 of {taskInfo?.subtasks.length})
          {taskInfo?.subtasks.map((task) => (
            <div
              className={`${
                theme
                  ? "bg-[#20212c] hover:bg-[#2c2f59]"
                  : "bg-[#f4f7fd] hover:bg-[#d2e1ff]"
              } h-[40px] w-full flex items-center p-3 my-2 rounded-md cursor-pointer `}
            >
              <input
                type="checkbox"
                checked={task.isCompleted}
                name='nika'
                className="w-4 h-4 accent-[#585fc7]"
              />
              <h2
                className={`ml-2 ${
                  task.isCompleted && "line-through text-gray-600"
                } `}
              >
                {" "}
                {task?.title}
              </h2>
            </div>
          ))}
        </label>
        <label className="font-semibold mt-4" htmlFor="status">
          Current Status
          <select
            value={taskInfo.status}
            name="status"
            className={`rounded-md w-full h-[40px] border ${
              theme ? "border-gray-600" : "border-gray-200"
            } outline-none px-2 bg-transparent`}
          >
            {selected &&
              selected[0].columns.map((column: any, index: number) => (
                <option key={index} value={column.name}>
                  {column.name}
                </option>
              ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default TaskModal;
