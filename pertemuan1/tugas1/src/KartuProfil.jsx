// src/KartuProfil.jsx

function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  return (
    <div
      style={{
        border: "2px solid #F8BBD0",
        borderRadius: "18px",
        padding: "20px",
        backgroundColor: "#FFF0F6",
        boxShadow: "0 6px 14px rgba(255, 105, 180, 0.25)",
        maxWidth: "450px",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {fotoUrl ? (
          <img
            src={fotoUrl}
            alt={`Foto ${nama}`}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #F48FB1",
            }}
          />
        ) : (
          // Cadangan jika tidak ada foto: lingkaran berisi huruf pertama nama
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#F06292",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "bold",
              border: "3px solid #F8BBD0",
            }}
          >
            {nama.charAt(0)}
          </div>
        )}
        <div>
          <h3 style={{ margin: "0 0 4px 0", color: "#C2185B" }}>{nama}</h3>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#AD1457" }}>
            NPM: <strong>{npm}</strong>
          </p>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#AD1457" }}>
            Kelas: {kelas}
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "16px",
          borderTop: "1px solid #F8BBD0",
          paddingTop: "10px",
        }}
      >
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            backgroundColor: status === "Aktif" ? "#F8BBD0" : "#FCE4EC",
            color: status === "Aktif" ? "#880E4F" : "#AD1457",
          }}
        >
          Status Akademik: {status}
        </span>
      </div>
    </div>
  );
}

export default KartuProfil;
