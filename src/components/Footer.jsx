import React from 'react'

const Footer = (props) => {
    const {  handleToggleModal, data } = props;
  return (
    <footer className="fixed bottom-0 left-0 w-[100%] flex items-center justify-between gap-4 p-[1rem] text-white">
      <div className="bgGradient"></div>
      <div className="flex flex-col">
        <h1 className="text-[1rem] font-[200]">
          APOD Project &nbsp; <small> (Astronomy Picture of the Day)</small>
        </h1>
        <h2 className="text-[1.5rem] font-medium">{data?.title}</h2>
      </div>
      <button
        className=" bg-transparent outline-none text-black p-[1rem] transition duration-200 cursor-pointer hover:opacity-[0.7]"
        onClick={handleToggleModal}
      >
        <i className="fa-solid fa-circle-info text-[1.5rem] text-white"></i>
      </button>
    </footer>
  );
}

export default Footer