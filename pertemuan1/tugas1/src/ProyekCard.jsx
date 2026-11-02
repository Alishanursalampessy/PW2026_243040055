// src/ProyekCard.jsx

function ProyekCard({ judul, deskripsi, teknologi, linkGithub }) {
  return (
    <div
      style={{
        border: "2px solid #F8A4C4",
        borderRadius: "16px",
        padding: "20px",
        backgroundColor: "#FFF5F9",
        boxShadow: "0 6px 12px -4px rgba(236, 72, 153, 0.25)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h3 style={{ margin: 0, color: "#DB2777" }}>{judul}</h3>
      <p style={{ margin: 0, fontSize: "14px", color: "#7A4558" }}>
        {deskripsi}
      </p>

      <div>
        {teknologi.map((tag) => (
          <span
            key={tag}
            style={{
              display: "inline-block",
              marginRight: "6px",
              marginBottom: "6px",
              padding: "3px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              backgroundColor: "#FCE7F3",
              color: "#BE185D",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={linkGithub}
        target="_blank"
        rel="noreferrer"
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#EC4899",
          color: "#FFFFFF",
          padding: "8px 16px",
          borderRadius: "999px",
          textDecoration: "none",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        Lihat di GitHub
      </a>
    </div>
  );
}

export default ProyekCard;
