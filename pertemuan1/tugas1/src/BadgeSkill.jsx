// src/BadgeSkill.jsx
import React from 'react';

const warnaLevel = {
  Pemula:   { bg: '#FFD6E7', teks: '#A62D69' },
  Menengah: { bg: '#FFB3D1', teks: '#8F2257' },
  Mahir:    { bg: '#FF8FBB', teks: '#741B48' },
};

function BadgeSkill({ namaSkill, level }) {
  const warna = warnaLevel[level] || { bg: '#E1E4E8', teks: '#333333' };

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        marginRight: '8px',
        marginBottom: '8px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: 'bold',
        backgroundColor: warna.bg,
        color: warna.teks,
      }}
    >
      {namaSkill} • {level}
    </span>
  );
}

export default BadgeSkill;
