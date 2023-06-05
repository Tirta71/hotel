import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarAdmin from "../component/NavbarAdmin/NavbarAdmin";
import Swal from "sweetalert2";
export default function TampilFormContact() {
  const [dataContact, setDataContact] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://647c5a8bc0bae2880ad09b73.mockapi.io/email")
      .then((response) => {
        setDataContact(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://647c5a8bc0bae2880ad09b73.mockapi.io/email/${id}`)
      .then((response) => {
        console.log("Data deleted:", response.data);
        fetchData();

        Swal.fire("Success", "Data Berhasil di hapus", "success");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      <NavbarAdmin />
      <div style={{ margin: "5rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Tampil Data Email
        </h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MESSAGE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {dataContact.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
