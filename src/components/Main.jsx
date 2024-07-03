const Main = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col max-h-[100vh] lg:max-h-[150vh] w-[100%]">
      <img
        src={data.hdurl}
        alt={data.title || "bg-image"}
        className=" object-cover w-[100%] h-[100vh] flex-1"
      />
    </div>
  );
};

export default Main;
