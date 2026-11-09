// src/ItemMatkul.jsx

function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div
      style={{
        padding: "14px 18px",
        backgroundColor: "#F8F9FA",
        borderLeft: "5px solid #800000",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <span style={{ fontWeight: "bold", color: "#800000" }}>{kode}</span> -{" "}
        {nama}
        <div style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
          Jadwal Sesi: {hari}
        </div>
      </div>
      <span
        style={{
          backgroundColor: "#F1DADA",
          color: "#800000",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "13px",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
