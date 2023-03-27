import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
const ManageDoctors = () => {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctors-portal-server-nine-beta.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const handleDeleteDoctor = doctor => {
    const proceed = window.confirm("Are you sure,to cancel this order?");
    if (proceed) {
      fetch(
        `https://doctors-portal-server-nine-beta.vercel.app/doctors/${doctor._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Doctor deleted Successful");
            refetch();
          }
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
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-warning text-white btn-xs rounded-full"
                  >
                    X
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are You Sure you want to delete?`}
          message={`If you delete ${deletingDoctor.name}. You'll not be able to reach him again.`}
          successAction={handleDeleteDoctor}
          successBtnName="Delete"
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
