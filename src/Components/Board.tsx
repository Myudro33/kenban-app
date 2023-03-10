import { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";

interface BoardInterface {
  name: string;
  isActive: boolean;
  index: number;
}

const Board = ({ name, isActive, index }: BoardInterface) => {
  const [iconColor, seticonColor] = useState("#828fa3");
  const [hover, sethover] = useState(false);
  const { theme, store, setstore, setActiveBoard } = useContext(StoreContext);

  const clickHandler = () => {
    setActiveBoard(store, setstore, index);
  };
  return (
    <div
      onMouseEnter={() => {
        sethover(true);
        if (!isActive) {
          seticonColor("#585fc7");
        }
      }}
      onMouseLeave={() => {
        sethover(false);
        seticonColor("#828fa3");
      }}
      onClick={clickHandler}
      className={`w-full h-[47px] ${
        theme ? "boardLight" : "boardDark"
      }  pl-8 rounded-r-full flex items-center font-bold ${
        isActive && "boardActive hover:bg-[#585fc7]"
      }   `}
    >
      {isActive ? (
        <svg
          width="16"
          height="16"
          fill={"#fff"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          fill={iconColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
        </svg>
      )}
      <p
        className={` ${hover && "text-[#585fc7]"} ${isActive && "text-white"} ml-3`}
      >
        {name}
      </p>
    </div>
  );
};

export default Board;
