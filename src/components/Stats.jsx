import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CountUp from "react-countup";
import {
  FaCertificate,
  FaGraduationCap,
  FaLightbulb,
  FaUserPlus,
} from "react-icons/fa";
import { getCurrentStats } from "../services/Student";

const Stats = ({ selectedYear }) => {

  const [stats, setStats] = useState({
    totalRegistered: 289,
    completed: 136,
    active: 276,
  });
  const getStats = async () => {
    const result = await getCurrentStats(selectedYear);
    setStats(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getStats()
  }, [selectedYear]);
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
      <div className="flex min-w-[250px] flex-row bg-gradient-to-br from-[rgba(41,41,41,0.5)] to-[rgba(41,41,41,0.8)] p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
          <FaUserPlus fontSize={30} color="rgba(41,41,41,0.9)" />
        </div>
        <div className="ml-4">
          <h6 className="text-4xl font-bold text-white uppercase">
            <CountUp
              end={ stats?.totalRegistered }
              start={0}
              duration={4}
            ></CountUp>
          </h6>
          <p className="mb-2 mt-3 font-bold text-lg text-white">Registered</p>
          {/* <p className="text-gray-200">{"description"}</p> */}
        </div>
      </div>

      <div className="flex min-w-[250px] flex-row bg-gradient-to-br from-[rgba(41,41,41,0.5)] to-[rgba(41,41,41,0.8)] p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
          <FaLightbulb fontSize={30} color="rgba(41,41,41,0.9)" />
        </div>
        <div className="ml-4">
          <h6 className="text-4xl font-bold text-white uppercase">
            <CountUp
              end={ stats.active }
              start={0}
              duration={4}
            ></CountUp>
          </h6>
          <p className="mb-2 mt-3 font-bold text-lg text-white">Active</p>
          {/* <p className="text-gray-200">{"description"}</p> */}
        </div>
      </div>
      <div className="flex min-w-[250px] flex-row bg-gradient-to-br from-[rgba(41,41,41,0.5)] to-[rgba(41,41,41,0.8)] p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
          <FaGraduationCap fontSize={30} color="rgba(41,41,41,0.9)" />
        </div>
        <div className="ml-4">
          <h6 className="text-4xl font-bold text-white uppercase">
            <CountUp
              end={ stats.completed }
              start={0}
              duration={4}
            ></CountUp>
          </h6>
          <p className="mb-2 mt-3 font-bold text-lg text-white">Completed</p>
          {/* <p className="text-gray-200">{"description"}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
