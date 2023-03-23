import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
const ManageDoctors = () => {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDoctorDelete = id => {
    const proceed = window.confirm("Are you sure,to cancel this order?");
    if (proceed) {
      fetch(`http://localhost:5000/doctors/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          toast.success("Doctor deleted Successful");
          refetch();
        });
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">Manage Doctors: {doctors.length} </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={doctor.image} alt="Doctor" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.email}</td>
                <th>
                  <button
                    onClick={() => handleDoctorDelete(doctor._id)}
                    className="btn btn-accent btn-xs rounded-full"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
