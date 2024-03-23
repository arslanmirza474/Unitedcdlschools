import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Button, Spinner } from "@chakra-ui/react";
import {
  FaCalculator,
  FaCrown,
  FaGraduationCap,
  FaList,
  FaNewspaper,
  FaTable,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { getStatsMonthly, getStudentStatsByYear } from "../../services/Student";
import Stats from "../../components/Stats";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);
const arrayData = [23, 23, 23, 33, 34, 19, 13, 24, 34, 21, 34, 30];
const nullData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const AdminDashboard = () => {
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Registration Count By Month",
      },
      datalabels: {
        color: "black", // You can customize the color of the labels
        anchor: "end", // Position of the labels on the bars
        align: "end",
        formatter: (value) => value, // Display the actual value on top of the bar
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
  });

  const [graphData, setGraphData] = useState({
    labels,
    datasets: [
      {
        label: "Student Reg By Month Data",
        data: arrayData,
        backgroundColor: "rgba(41,41,41,0.2)",
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2024"); // Initialize with default value
  console.log(selectedYear)
  async function fetchStats() {
    const resultStats = await getStudentStatsByYear();
    const data = await getStatsMonthly(selectedYear);
    setLoading(false);
    console.log(data)
    if (data?.success) {
      const monthsList = data?.data?.data;
      const result = {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      };
      monthsList.forEach((item) => {
        const month = new Date(item.createAt).toLocaleString("en-us", {
          month: "long",
        });
        result[month] = result[month] + 1;
      });
       console.log(Object.keys(result));

      setOptions({
        ...options,
        datalabels: {
          // Add the datalabels configuration
          color: "black", // You can customize the color of the labels
          anchor: "end", // Position of the labels on the bars
          align: "end",
          formatter: (value) => value, // Display the actual value on top of the bar
        },

        // scales: {
        //   y: {
        //     max:
        //       Object.values(result).reduce(
        //         (a, b) => Math.max(a, b),
        //         -Infinity
        //       ) + 10,
        //     min: 0,
        //   },
        // },
      });
      setGraphData({
        // ...graphData,
        labels: Object.keys(result).map((str) => str.slice(0, 3)),
        datasets: [
          {
            label: "Student Reg By Month Data",
            data: Object.values(result),
            backgroundColor: "rgb(41,41,41)",
          },
        ],
      });
    }
  }

  useEffect(() => {
    console.log(selectedYear)
    fetchStats();
  }, [selectedYear]);
  return (
    <div style={{}}>
      <div className="container-fluid ">
        {/* <div className="display-3">Super Admin Dashboard</div> */}
        <div className="container " style={{ borderRadius: "20px" }}>
          <div className="row my-3">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className="row my-3">
                <Button
                  className="col-lg-3 col-md-3 col-xs-11 col-sm-11 mx-3 my-2 adminDashButton  customRadius  py-4 shadow-md"
                  leftIcon={<FaGraduationCap />}
                  onClick={() => {
                    navigate("/superAdmin/allForms");
                  }}
                >
                  All Forms
                </Button>

                <Button
                  className="col-lg-3 col-md-3 col-xs-11 col-sm-11 mx-3 my-2 adminDashButton customRadius py-4 shadow-md"
                  leftIcon={<FaTable />}
                  onClick={() => {
                    navigate("/superAdmin/allStudentsTable");
                  }}
                >
                  All Students
                </Button>
                <Button
                  className="col-lg-3 col-md-3 col-xs-11 col-sm-11 mx-3 my-2 adminDashButton customRadius py-4 shadow-md"
                  leftIcon={<FaList />}
                  onClick={() => {
                    navigate("/superAdmin/showList");
                  }}
                >
                  Users Area
                </Button>
                <Button
                  className="col-lg-3 col-md-3 col-xs-11 col-sm-11 mx-3 my-2 adminDashButton customRadius py-4 shadow-md"
                  leftIcon={<FaCalculator />}
                  onClick={() => {
                    navigate("/Admin/correctResult");
                  }}
                >
                  Update Results
                </Button>
              </div>
              <div className="col-12 my-10 md:my-10 lg:my-10">
                <Stats selectedYear={selectedYear} />
              </div>
              <div className="col-12 my-10 md:my-10 lg:my-10">
                <div className="flex flex-col items-center justify-center">
                  <div className="">
                    <select
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={selectedYear}
                      onChange={(e) => {
                        setSelectedYear(e.target.value);
                      }}
                    >
                      <option value="2023" className="bg-blue-100">
                        2023
                      </option>
                      <option value="2024" className="bg-green-100">
                        2024
                      </option>
                      <option value="2025" className="bg-yellow-100">
                        2025
                      </option>
                    </select>
                  </div>
                  <div className="w-full md:w-4/3 lg:w-4/3 p-2">
                    <div className="overflow-x-auto">
                      {loading === true ? (
                        <div className="text-center my-5">
                          <Spinner width={10} padding={10}></Spinner>
                        </div>
                      ) : (
                        <>
                          {/* {selectedYear === "2023" ? ( */}
                            <Bar
                              options={options}
                              data={graphData}
                              className="rounded-lg"
                              style={{
                                minWidth: "100%",
                              }}
                             />
                         
                        </>
                         // ) : (
                          //   <Bar
                          //     options={options}
                          //     data={nullData}
                          //     className="rounded-lg"
                          //     style={{
                          //       minWidth: "100%",
                          //     }}
                          //   />
                          // )
                          // }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="d-none d-sm-none d-md-block my-3">
                <div style={{ color: "silver" }}>
                  <div>
                    Auth :{" "}
                    <span style={{ color: "black" }}>
                      <b>{user?.userName?.toUpperCase()}</b>
                    </span>
                  </div>
                  <div>
                    Location :{" "}
                    <span style={{ color: "black" }}>
                      <b>{"Frederick, MD"?.toUpperCase()}</b>
                    </span>{" "}
                  </div>
                </div>
                <div>
                  <img
                    src="/logo.png"
                    alt="logo"
                    style={{ height: "600px", opacity: "0.5" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
