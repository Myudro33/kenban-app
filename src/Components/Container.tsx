import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/storeContext";
import AddNewColumn from "./AddNewColumn";
import Column from "./Column";

const Container = () => {
  
  const { sideBar, store,selected, setselected } = useContext(StoreContext);

  const colors = [
    "#49c4e5",
    "#8471f2",
    "#67e2ae",
    "#49c4e5",
    "#8471f2",
    "#67e2ae",
  ];

  useEffect(() => {
    const selectedBoard = [
      ...store.filter((item: any) => item.isActive === true),
    ];
    setselected(selectedBoard);
  }, [store]);

  return (
    <div
      className={`${
        sideBar ? "containerOpen" : "w-full"
      } absolute z-0 right-0 containerHeight p-6 flex overflow-scroll`}
    >
      {selected &&
        selected[0]?.columns.map((column: any,index:number) => (
          <Column key={index}  name={column.name} tasks={column.tasks} color={colors[index]} />
        ))}
        <AddNewColumn/>
    </div>
  );
};

export default Container;
