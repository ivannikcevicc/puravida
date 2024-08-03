"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[100vh]  justify-center items-center flex flex-col">
      <PuffLoader size={150} color="orange" />
    </div>
  );
};

export default Loader;