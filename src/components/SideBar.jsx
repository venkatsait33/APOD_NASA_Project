import React from "react";

const SideBar = (props) => {
     const { handleToggleModal, data } = props;
  return (
    <div className=" fixed inset-0 flex flex-col z-[10] w-auto h-[100%]">
      <div
        onClick={handleToggleModal}
        className=" absolute inset-0 bg-[#030615] opacity-[0.6]"
      ></div>
      <div className=" relative flex flex-col h-full w-[50%] lg:w-[30%] p-4 ml-auto bg-[#030615] text-white z-[15] overflow-y-scroll gap-2">
        <h2 className="font-[200] text-[1.5rem]">{data?.title}</h2>
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-[1.2rem] font-[200]">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button
          className=" bg-transparent text-white border-none justify-start flex p-4 outline-none cursor-pointer transition duration-200 font-bold "
          onClick={handleToggleModal}
        >
          <i className="fa-solid fa-arrow-right opacity-[0.7]"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
