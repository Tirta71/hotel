import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "../component/NavbarAdmin/NavbarAdmin";

export default function TambahKamar() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [totalRoom, setTotalRoom] = useState(0);
  const [kamarList, setKamarList] = useState([]);
  const [selectedKamar, setSelectedKamar] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar"
      );
      setKamarList(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newKamar = {
      name,
      description,
      breakfast,
      price,
      capacity,
      images,
      amenities,
      totalRoom,
    };

    try {
      if (selectedKamar) {
        // Edit existing kamar
        const response = await axios.put(
          `https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar/${selectedKamar.id}`,
          newKamar
        );

        if (response.status === 200) {
          alert("Data kamar berhasil diperbarui!");
          setSelectedKamar(null);
        }
      } else {
        // Add new kamar
        const response = await axios.post(
          "https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar",
          newKamar
        );

        if (response.status === 201) {
          alert("Data kamar berhasil ditambahkan!");
        }
      }

      // Reset form fields
      setName("");
      setDescription("");
      setBreakfast("");
      setPrice(0);
      setCapacity(0);
      setImages([]);
      setAmenities([]);
      setTotalRoom(0);

      // Fetch updated data
      fetchData();
    } catch (error) {
      console.log("Error:", error);
      alert("Gagal memproses data kamar. Silakan coba lagi.");
    }
  };

  const handleEdit = (kamar) => {
    setSelectedKamar(kamar);
    setName(kamar.name);
    setDescription(kamar.description);
    setBreakfast(kamar.breakfast);
    setPrice(kamar.price);
    setCapacity(kamar.capacity);
    setImages(kamar.images);
    setAmenities(kamar.amenities);
    setTotalRoom(kamar.totalRoom);
  };

  const handleDelete = async (kamar) => {
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus kamar ${kamar.name}?`
    );

    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar/${kamar.id}`
        );

        if (response.status === 200) {
          alert("Data kamar berhasil dihapus!");
          setSelectedKamar(null);

          // Fetch updated data
          fetchData();
        }
      } catch (error) {
        console.log("Error:", error);
        alert("Gagal menghapus data kamar. Silakan coba lagi.");
      }
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div style={{ margin: "5rem" }}>
        <h2>{selectedKamar ? "Edit Kamar" : "Tambah Kamar"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nama Kamar:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Deskripsi:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
          <label>
            Sarapan:
            <input
              type="text"
              value={breakfast}
              onChange={(e) => setBreakfast(e.target.value)}
              required
            />
          </label>
          <label>
            Harga:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </label>
          <label>
            Kapasitas:
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              required
            />
          </label>
          <label>
            Total Room
            <input
              type="number"
              value={totalRoom}
              onChange={(e) => setTotalRoom(Number(e.target.value))}
              required
            />
          </label>
          <label>
            Gambar (pisahkan URL dengan koma):
            <input
              type="text"
              value={images}
              onChange={(e) => setImages(e.target.value.split(","))}
              required
            />
          </label>
          <label>
            Fasilitas (pisahkan dengan koma):
            <input
              type="text"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value.split(","))}
              required
            />
          </label>
          <button type="submit">
            {selectedKamar ? "Perbarui Kamar" : "Tambah Kamar"}
          </button>
        </form>

        <h2>Data Kamar</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Sarapan</th>
              <th>Harga</th>
              <th>Kapasitas</th>
              <th>Gambar</th>
              <th>Fasilitas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kamarList.map((kamar) => (
              <tr key={kamar.id}>
                <td>{kamar.id}</td>
                <td>{kamar.name}</td>
                <td>{kamar.description}</td>
                <td>{kamar.breakfast}</td>
                <td>{kamar.price}</td>
                <td>{kamar.capacity}</td>
                <td>{kamar.totalRoom}</td>
                <td>
                  {kamar.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt={kamar.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px",
                      }}
                    />
                  ))}
                </td>
                <td>{kamar.amenities.join(", ")}</td>
                <td>
                  <button onClick={() => handleEdit(kamar)}>Edit</button>
                  <button onClick={() => handleDelete(kamar)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
