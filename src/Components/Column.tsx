import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/storeContext";
import ColumnTask from "./ColumnTask";

const Column = ({ name, tasks, color }: any) => {
  const { theme } = useContext(StoreContext);
  return (
    <div className="w-[300px] mx-4 flex flex-col">
      <header className="flex items-center mb-6">
        <div
          style={{ backgroundColor: color }}
          className={`w-4 h-4 rounded-full`}
        ></div>
        <h1 className="ml-2 text-[#828fa3] font-semibold">
          {name} ({tasks.length})
        </h1>
      </header>
      {tasks.map((task: any) => (
       <ColumnTask task={task} />
      ))}
    </div>
  );
};

export default Column;
