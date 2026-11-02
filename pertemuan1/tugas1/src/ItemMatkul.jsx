// src/ItemMatkul.jsx

function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div
      style={{
        padding: "14px 18px",
        backgroundColor: "#FFF0F5",
        borderLeft: "5px solid #FF69B4",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <span style={{ fontWeight: "bold", color: "#E75480" }}>{kode}</span> -{" "}
        {nama}
        <div style={{ fontSize: "12px", color: "#B76E79", marginTop: "4px" }}>
          Jadwal Sesi: {hari}
        </div>
      </div>
      <span
        style={{
          backgroundColor: "#FFC0CB",
          color: "#C94C7C",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
