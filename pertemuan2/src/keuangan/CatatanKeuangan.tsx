// src/keuangan/CatatanKeuangan.tsx (komponen induk Catatan Keuangan Mini)
import { useState, useEffect } from "react";
import Kartu from "../Kartu";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";
import { rupiah } from "./format";
import type { Transaksi } from "./ItemTransaksi";

function CatatanKeuangan() {
  // State utama: ambil dari localStorage jika ada
  const [daftar, setDaftar] = useState<Transaksi[]>(() => {
    try {
      const data = localStorage.getItem("catatan-keuangan");
      if (data) return JSON.parse(data) as Transaksi[];
    } catch {
      // isi localStorage rusak: mulai dari kosong
    }
    return [];
  });

  // Efek: simpan ke localStorage setiap daftar berubah
  useEffect(() => {
    localStorage.setItem("catatan-keuangan", JSON.stringify(daftar));
  }, [daftar]);

  const tambah = (data: Omit<Transaksi, "id">) => {
    setDaftar([...daftar, { id: Date.now(), ...data }]); // array baru
  };

  const hapus = (id: number) => {
    setDaftar(daftar.filter((t) => t.id !== id)); // array baru tanpa item itu
  };

  // Nilai turunan (dihitung dari state, bukan disimpan sebagai state baru)
  const totalMasuk = daftar
    .filter((t) => t.jenis === "pemasukan")
    .reduce((jumlah, t) => jumlah + t.nominal, 0);
  const totalKeluar = daftar
    .filter((t) => t.jenis === "pengeluaran")
    .reduce((jumlah, t) => jumlah + t.nominal, 0);
  const saldo = totalMasuk - totalKeluar;

  return (
    <>
      <h1 className="judul">Catatan Keuangan Mini</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: Tugas Terstruktur</p>

      <Kartu judul="Saldo Saat Ini">
        <p className={`saldo ${saldo < 0 ? "pengeluaran" : "pemasukan"}`}>{rupiah(saldo)}</p>
        <div className="rekap">
          <span className="pemasukan">Masuk: {rupiah(totalMasuk)}</span>
          <span className="pengeluaran">Keluar: {rupiah(totalKeluar)}</span>
        </div>
      </Kartu>

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambah} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {daftar.length === 0 ? (
          <p className="kosong">Belum ada transaksi. Yuk catat transaksi pertamamu!</p>
        ) : (
          <ul className="daftar">
            {daftar.map((t) => (
              <ItemTransaksi key={t.id} transaksi={t} onHapus={hapus} />
            ))}
          </ul>
        )}
      </Kartu>
    </>
  );
}

export default CatatanKeuangan;
