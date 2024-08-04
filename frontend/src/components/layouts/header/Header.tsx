import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="border border-gray-400 h-[15vh] bg-gray-600">
      <p className="font-bold text-white text-3xl tracking-wider flex justify-center h-[100%] items-center">
        Realtime Crypto
      </p>
    </div>
  );
};

export default Header;
