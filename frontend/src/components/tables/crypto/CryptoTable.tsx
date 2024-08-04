import React, { FC, useEffect, useState } from "react";
import { socket } from "../../../socket";
import { ILiveCoinWatchData } from "./types";

const CryptoTable: FC = () => {
  // states----------------------------------------------------------------------------
  const [liveWatchData, setLiveWatchData] = useState<ILiveCoinWatchData[] | []>(
    []
  );
  // ---------------------------------------------------------------------------------------
  // useEffects----------------------------------------------------------------------------
  useEffect(() => {
    socket.on("data-received", (data) => {
      setLiveWatchData(JSON.parse(data));
    });
    return () => {
      socket.off("data-received");
    };
  }, []);
  //   -------------------------------------------------------------------------------------

  return (
    <div className="p-10 h-[85vh]">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
          <tbody>
            {Array.isArray(liveWatchData) &&
              liveWatchData.length &&
              liveWatchData.map((liveData) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
