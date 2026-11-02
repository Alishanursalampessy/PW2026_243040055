// src/App.jsx
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import ItemMatkul from "./ItemMatkul";
import Showcase from "./Showcase";

function App() {
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  const daftarSkill = [
    { id: 1, namaSkill: "HTML & CSS", level: "Mahir" },
    { id: 2, namaSkill: "JavaScript", level: "Menengah" },
    { id: 3, namaSkill: "React JS", level: "Pemula" },
    { id: 4, namaSkill: "Java", level: "Menengah" },
  ];

  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  const judulSeksi = {
    color: "#EC4899",
    borderBottom: "2px solid #F9A8D4",
    paddingBottom: "8px",
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#EC4899", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#F472B6", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>Profil Mahasiswa Praktikan</h2>
        <KartuProfil
          nama="Alisha Nur Salampessy"
          npm="243040055"
          kelas="IF - Praktikum"
          status="Aktif"
        />

        <h3 style={{ color: "#EC4899" }}>Keahlian</h3>
        <div>
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>Showcase Portofolio Mini</h2>
        <Showcase />
      </section>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#EC4899",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
