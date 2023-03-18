import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-row">
        <div className="basis-1/4 hidden sm:block lg:block ml-2 ">
          My Appointments
        </div>
        <div className="basis-3/4 bg-base-200 h-screen pt-2 rounded-lg">
          <div className="flex justify-between items-center mb-2 mx-4 px-2">
            <h1 className="text-3xl">My Appointment</h1>
            <button className="btn btn-outline btn-accent">Date</button>
          </div>
          <div className="mx-4">
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
