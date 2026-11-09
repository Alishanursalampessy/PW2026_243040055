import { useEffect, useState } from 'react'
import Kartu from './component/Kartu'
import Penghitung from './component/Penghitung'
import FormTugas from './component/FormTugas'
import ItemTugas, { type Tugas } from './component/ItemTugas'
import './App.css'

function App() {
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas')
    if (dataTersimpan) return JSON.parse(dataTersimpan)

    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ]
  })

  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!')
  }, [])

  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length
    document.title = `(${sisa}) Tugas Belum Selesai`
  }, [daftarTugas])

  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas))
  }, [daftarTugas])

  function tambahTugas(judul: string) {
    const tugasBaru = { id: Date.now(), judul, selesai: false }
    setDaftarTugas([...daftarTugas, tugasBaru])
  }

  function ubahStatus(id: number) {
    const daftarBaru = daftarTugas.map((tugas) =>
      tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas,
    )
    setDaftarTugas(daftarBaru)
  }

  function hapusTugas(id: number) {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id))
  }

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length

  return (
    <main className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>
      <Penghitung />
      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>
      <Kartu judul="Daftar Tugas">
        <p className="ringkasan" aria-live="polite">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>
        {daftarTugas.length === 0 ? (
          <p className="kosong">Belum ada tugas. Yuk tambahkan tugas pertamamu!</p>
        ) : (
          <ul className="daftar">
            {daftarTugas.map((tugas) => (
              <ItemTugas key={tugas.id} tugas={tugas} onUbahStatus={ubahStatus} onHapus={hapusTugas} />
            ))}
          </ul>
        )}
      </Kartu>
    </main>
  )
}

export default App
