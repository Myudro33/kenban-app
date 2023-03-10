import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../context/storeContext";
import exitIcon from "../assets/icon-cross.svg";

const EditBoardModal = ({ seteditBoardModal, selected }: any) => {
  const divRef = useRef<any>();
  const { theme, store, setstore } = useContext(StoreContext);

  const divRefHandler = (event: any) => {
    if (event.target === divRef.current) {
      seteditBoardModal(false);
    }
  };
  const [values, setvalues] = useState<any>({
    name: selected?.name,
    columns: selected?.columns,
    isActive: true,
  });

  const updateBoard = () => {
    const index = store.findIndex((board: any) => board.name === selected.name);
    if (index !== -1) {
      const data = [...store];
      data[index] = values;
      setstore(data);
      seteditBoardModal(false);
    }
  };
  const nameChangeHandler = (value: string, index: number) => {
    const singleValue = { ...values.columns[index], name: value };
    const updateColumns = { ...values };
    updateColumns.columns[index] = singleValue;
    setvalues(updateColumns);
  };

  const deleteColumn = (name: string) => {
    setvalues({
      ...values,
      columns: values?.columns.filter((item: any) => item.name !== name),
    });
  };
  const addNewSubtask = () => {
    if (values.columns.length < 6) {
      setvalues({
        ...values,
        columns: [...values.columns, { name: "", tasks: [] }],
      });
    }
  };
  return (
    <div
      onClick={(event) => divRefHandler(event)}
      ref={divRef}
      className="w-screen h-screen bg-[#0000005c] absolute z-20 flex justify-center items-center"
    >
      <div
        className={`w-[480px] ${
          theme ? "dark" : "light"
        } p-8 flex flex-col rounded-lg relative`}
      >
        <svg
          onClick={() => seteditBoardModal(false)}
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
          } font-semibold text-xl`}
        >
          Edit Board
        </h1>
        <label className="font-semibold mt-4" htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            maxLength={23}
            onChange={(e) => setvalues({ ...values, name: e.target.value })}
            className={`rounded-md w-full h-[40px] border text-sm ${
              theme
                ? "border-gray-600 text-white"
                : "border-gray-200 text-black"
            } outline-none px-2 bg-transparent`}
          />
        </label>
        <label className="font-semibold mt-4" htmlFor="columns">
          Columns
          {values?.columns.map((column: any, index: any) => (
            <div
              key={index}
              className="w-full my-4 flex justify-between items-center"
            >
              <input
                type="text"
                value={values.columns[index].name}
                onChange={(e) => nameChangeHandler(e.target.value, index)}
                className={`rounded-md w-[93%] h-[40px] border text-sm ${
                  theme
                    ? "border-gray-600 text-white"
                    : "border-gray-200 text-black"
                } outline-none px-2 placeholder:font-thin bg-transparent`}
              />
              <img
                src={exitIcon}
                onClick={() => deleteColumn(column.name)}
                className="cursor-pointer"
                alt="exit icon"
              />
            </div>
          ))}
        </label>
        <button
          className={`h-[39px] text-sm font-semibold text-[#585fc7] rounded-3xl mt-2 active:scale-95   ${
            theme ? "bg-white" : "bg-[#585fc71a] hover:bg-[#585fc749]"
          }  ${values.columns.length === 6 && "cursor-not-allowed"} `}
          onClick={addNewSubtask}
        >
          + Add New Subtask
        </button>

        <div className="flex justify-between w-full mt-6">
          <button
            onClick={updateBoard}
            className={`w-[200px] h-[39px] bg-[#585fc7] hover:bg-[#585fc7a9] text-white font-semibold rounded-3xl active:scale-95     `}
          >
            Save Changes
          </button>
          <button
            className={`w-[200px] h-[39px] font-semibold rounded-3xl text-[#585fc7]  ${
              theme ? "bg-white" : "bg-[#585fc71a] hover:bg-[#585fc749]"
            } active:scale-95`}
            onClick={() => seteditBoardModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBoardModal;
