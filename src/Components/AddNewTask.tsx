import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../context/storeContext";
import exitIcon from "../assets/icon-cross.svg";

const AddNewTask = ({ selected, setnewTask }: any) => {
  const { theme, store, setstore } = useContext(StoreContext);
  const divRef = useRef<any>();
  const [subtasks, setsubtasks] = useState([{ id: 0, value: "" }]);
  const [title, settitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [status, setstatus] = useState<string>(selected[0]?.columns[0].name);
  const subtaskValue = (index: number, value: string) => {
    setsubtasks(
      subtasks.map((item, i) => {
        if (item.id === index) {
          return { ...item, value: value };
        }
        return item;
      })
    );
  };
  const deleteSubtasks = (id: number) => {
    setsubtasks(subtasks.filter((item) => item.id !== id));
  };
  const addNewSubtask = () => {
    if (subtasks.length < 7) {
      setsubtasks([...subtasks, { id: Math.random(), value: "" }]);
    }
  };
  const divRefHandler = (event: any) => {
    if (event.target === divRef.current) {
      setnewTask(false);
    }
  };

  const newTask = [
    {
      title: title,
      description: description,
      status: status,
      subtasks: subtasks,
    },
  ];
  const submitHandler = () => {
    const index = (element: any) => element.name === selected[0]?.name;
    const IndexC = (element: any) => element.name === status;
    const itemIndex = store.findIndex(index);
    const newStore = [...store];
    const columnIndex = newStore[itemIndex].columns.findIndex(IndexC);

    newStore[itemIndex].columns[columnIndex].tasks = [...newStore[itemIndex].columns[columnIndex].tasks,...newTask] 
    setstore(newStore)
    setnewTask(false)
  };

  return (
    <div
      ref={divRef}
      onClick={(event) => divRefHandler(event)}
      className="w-screen h-screen bg-[#0000005c] absolute z-20 flex justify-center items-center"
    >
      <div
        className={`w-[480px] ${
          theme ? "dark" : "light"
        } p-8 flex flex-col rounded-lg relative`}
      >
        <svg
          onClick={() => setnewTask(false)}
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
        <h1
          className={`${
            theme ? "text-white" : "text-black"
          } font-semibold text-lg `}
        >
          Add New Task
        </h1>
        <label className="font-semibold mt-4" htmlFor="title">
          Title
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            name="title"
            className={`rounded-md w-full h-[40px] border ${theme?'border-gray-600':'border-gray-200'} outline-none px-2 bg-transparent`}
          />
        </label>
        <label className="font-semibold mt-4" htmlFor="description">
          Description
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder='e.g it"s always good to take a break. This 15 minute break will recharge the batteries little  '
            name="description"
            className={`rounded-md w-full bg-transparent h-[112px] border ${theme?'border-gray-600':'border-gray-200'} outline-none p-2 resize-none placeholder:text-xs font-thin`}
          />
        </label>
        <label className="font-semibold mt-4" htmlFor="title">
          Subtasks
          <div className="flex flex-col w-full">
            {subtasks.map((task) => (
              <div
                key={task.id}
                className="w-full my-1 flex justify-between items-center"
              >
                <input
                  type="text"
                  value={subtasks[task.id]?.value}
                  onChange={(e) => subtaskValue(task.id, e.target.value)}
                  className={`rounded-md w-[90%] h-[40px] border ${theme?'border-gray-600':'border-gray-200'} outline-none px-2 placeholder:font-thin bg-transparent`}
                  placeholder="e.g make a coffee"
                />
                <img
                  onClick={() => deleteSubtasks(task.id)}
                  className="cursor-pointer"
                  src={exitIcon}
                  alt="exit icon"
                />
              </div>
            ))}
            <button
              onClick={addNewSubtask}
              className={`h-[39px] text-[#585fc7] rounded-3xl bg-[#585fc71a] hover:bg-[#585fc749] mt-2 active:scale-95 ${
                subtasks.length < 7 ? "cursor-pointer" : "cursor-not-allowed"
              }  `}
            >
              + Add New Subtask
            </button>
          </div>
        </label>
        <label className="font-semibold mt-4" htmlFor="status">
          Status
          <select
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            name="status"
            className={`rounded-md w-full h-[40px] border ${theme?'border-gray-600':'border-gray-200'} outline-none px-2 bg-transparent`}
          >
            {selected &&
              selected[0].columns.map((column: any, index: number) => (
                <option key={index} value={column.name}>
                  {column.name}
                </option>
              ))}
          </select>
        </label>
        <button
          onClick={submitHandler}
          className="h-[39px] bg-[#585fc7] hover:bg-[#585fc7b8] text-white rounded-3xl mt-4 active:scale-95 font-semibold text-sm"
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default AddNewTask;
