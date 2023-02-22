import React, { useContext } from "react";
import { StoreContext } from "../context/storeContext";
import iconSun from "../assets/icon-light-theme.svg";
import iconMoon from "../assets/icon-dark-theme.svg";

const ThemeSwitcher = () => {
  const { theme,settheme } = useContext(StoreContext);
  return (
    <div
      className={`w-[250px] h-[48px] rounded-md m-auto flex justify-center items-center  ${
        theme ? "bodyDark" : "bodyLight"
      }`}
    >
      <img src={iconSun} alt="" />
      <label  className="switch">
        <input onChange={()=>settheme(!theme)} checked={theme} type="checkbox" />
        <span className="slider round"></span>
      </label>
      <img src={iconMoon} alt="" />
    </div>
  );
};

export default ThemeSwitcher;
