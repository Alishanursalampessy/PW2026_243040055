// src/DaftarTugas.tsx (komponen induk aplikasi Daftar Tugas Praktikum)
import { useState, useEffect } from "react";
import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";
import type { Tugas } from "./ItemTugas";

type Filter = "semua" | "belum" | "selesai";

const tugasAwal: Tugas[] = [
  { id: 1, judul: "Install Node.js dan Vite", selesai: true },
  { id: 2, judul: "Pelajari useState", selesai: false },
];

function DaftarTugas() {
  // 1. State utama: coba ambil dari localStorage, jika kosong pakai data contoh
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>(() => {
    try {
      const dataTersimpan = localStorage.getItem("daftar-tugas");
      if (dataTersimpan) {
        return JSON.parse(dataTersimpan) as Tugas[]; // ubah teks JSON kembali menjadi array
      }
    } catch {
      // isi localStorage rusak: abaikan dan pakai data contoh
    }
    return tugasAwal;
  });

  // Tugas 1: state untuk pilihan filter
  const [filter, setFilter] = useState<Filter>("semua");

  // Efek A: dijalankan SEKALI saat komponen pertama kali tampil
  useEffect(() => {
    console.log("Aplikasi Daftar Tugas siap digunakan!");
  }, []);

  // Efek B: perbarui judul tab peramban setiap daftarTugas berubah
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Efek C: simpan daftarTugas ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // 2. Menambah tugas: buat array BARU berisi tugas lama + tugas baru
  const tambahTugas = (judul: string) => {
    const tugasBaru: Tugas = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // 3. Mengubah status selesai: salin tugas yang dicentang, biarkan yang lain
  const ubahStatus = (id: number) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai }; // salinan dengan status dibalik
      }
      return tugas; // tugas lain tidak berubah
    });
    setDaftarTugas(daftarBaru);
  };

  // 4. Menghapus tugas: ambil semua tugas KECUALI yang id-nya sama
  const hapusTugas = (id: number) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Tugas 2: hapus semua tugas yang berstatus selesai
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // 5. Nilai turunan: dihitung dari state, tidak perlu state baru
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // Tugas 1: saring daftar sesuai filter SEBELUM di-map
  const tugasTampil = daftarTugas.filter((tugas) => {
    if (filter === "belum") return !tugas.selesai;
    if (filter === "selesai") return tugas.selesai;
    return true; // "semua"
  });

  const pilihanFilter: { nilai: Filter; label: string }[] = [
    { nilai: "semua", label: "Semua" },
    { nilai: "belum", label: "Belum Selesai" },
    { nilai: "selesai", label: "Selesai" },
  ];

  return (
    <>
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* Tugas 1: tiga tombol filter, yang aktif tampil berbeda */}
        <div className="filter">
          {pilihanFilter.map((p) => (
            <button
              key={p.nilai}
              className={`tombol-filter ${filter === p.nilai ? "aktif" : ""}`}
              onClick={() => setFilter(p.nilai)}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Conditional rendering dengan ternary: tampilkan pesan jika kosong */}
        {daftarTugas.length === 0 ? (
          <p className="kosong">Belum ada tugas. Yuk tambahkan tugas pertamamu!</p>
        ) : tugasTampil.length === 0 ? (
          <p className="kosong">Tidak ada tugas pada filter ini.</p>
        ) : (
          <ul className="daftar">
            {tugasTampil.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}

        {/* Tugas 2: tombol hanya muncul jika ada minimal satu tugas selesai */}
        {jumlahSelesai > 0 && (
          <div className="aksi">
            <button className="tombol tombol-merah" onClick={hapusSemuaSelesai}>
              Hapus Semua yang Selesai
            </button>
          </div>
        )}
      </Kartu>
    </>
  );
}

export default DaftarTugas;
