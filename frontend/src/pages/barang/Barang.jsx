import { useRef } from "react"

export default function Barang() {
    const nama = useRef();
    const harga = useRef();

    const submitForm = (e) => {
        e.preventDefault()
        console.log(nama.current.value)
        console.log(harga.current.value)
    }
    return <>
        <h1>Barang</h1>
        <h2>Daftar Barang</h2>
        <form onSubmit={submitForm}>
            <input type="text" placeholder="Nama Barang" ref={nama} />
            <input type="number" placeholder="Harga" ref={harga} />
            <button type="submit">Simpan</button>
        </form>
    </>
}