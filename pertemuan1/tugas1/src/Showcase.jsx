// src/Showcase.jsx
import React from 'react';
import ProyekCard from './ProyekCard';

const daftarProyek = [
  {
    id: 1,
    judul: 'Aplikasi To-Do List',
    deskripsi: 'Aplikasi pencatat tugas harian sederhana dengan fitur tambah dan hapus tugas.',
    teknologi: ['React', 'Vite', 'CSS'],
    linkGithub: 'https://github.com/username/todo-list',
  },
  {
    id: 2,
    judul: 'Landing Page Kampus',
    deskripsi: 'Halaman perkenalan program studi dengan tampilan responsif.',
    teknologi: ['HTML', 'CSS', 'JavaScript'],
    linkGithub: 'https://github.com/username/landing-kampus',
  },
  {
    id: 3,
    judul: 'Katalog Produk',
    deskripsi: 'Menampilkan daftar produk dari data array menggunakan list rendering.',
    teknologi: ['React', 'Props', 'Map'],
    linkGithub: 'https://github.com/username/katalog-produk',
  },
  {
    id: 4,
    judul: 'Sistem Donor Darah',
    deskripsi: 'Prototipe sistem informasi donor darah untuk melihat riwayat donor.',
    teknologi: ['Java', 'Swing', 'OOP'],
    linkGithub: 'https://github.com/username/donor-darah',
  },
];

function Showcase() {
  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      {daftarProyek.map((proyek) => (
        <ProyekCard
          key={proyek.id}
          judul={proyek.judul}
          deskripsi={proyek.deskripsi}
          teknologi={proyek.teknologi}
          linkGithub={proyek.linkGithub}
        />
      ))}
    </div>
  );
}

export default Showcase;
