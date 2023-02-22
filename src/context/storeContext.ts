import React, { createContext, useContext } from "react";
import data from "../data.json";

export const StoreContext = createContext<any>(null);

interface ObjectProps {
 object: typeof data
}
export const setActiveBoard = (store: any, setstore: any, index: any) => {
    const newArray = store.map((object:ObjectProps)=>{
        return {...object,isActive:false}
    })
    setstore(newArray)
    newArray[index] = {...newArray[index],isActive:true}
    setstore(newArray)
};
