import React, { FC, useEffect, useState } from "react";
import { setLiveCoinWatchData } from "../../../redux/slices/liveWatchSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { socket } from "../../../socket";

const CryptoTable: FC = () => {
  // hooks----------------------------------------------------------------------------
  const dispatch = useAppDispatch();
  const { liveCoinWatchData } = useAppSelector((state) => state.liveWatch);
  // ---------------------------------------------------------------------------------------
  // useEffects----------------------------------------------------------------------------F
  useEffect(() => {
    socket.on("data-received", (data) => {
      dispatch(setLiveCoinWatchData(JSON.parse(data)));
    });
    return () => {
      socket.off("data-received");
    };
  }, []);
  //   -------------------------------------------------------------------------------------

  return (
    <div className="p-10 h-[85vh] overflow-hidden">
      <div className="relative h-[100%] overflow-scroll ">
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Code
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
              <th scope="col" className="px-6 py-3">
                Volume
              </th>
            </tr>
          </thead>
          <tbody className="">
            {Array.isArray(liveCoinWatchData) && liveCoinWatchData.length ? (
              liveCoinWatchData.map((liveData, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {liveData.code}
                    </th>
                    <td className="px-6 py-4">{liveData.rate}</td>
                    <td className="px-6 py-4">{liveData.volume}</td>
                  </tr>
                );
              })
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Loading...
                </th>
                <td className="px-6 py-4">Loading...</td>
                <td className="px-6 py-4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
