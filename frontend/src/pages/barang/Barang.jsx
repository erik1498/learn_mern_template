import { useEffect, useRef, useState } from "react"
import axios from "axios"

export default function Barang() {
    const nama = useRef();
    const harga = useRef();

    const [barang, setBarang] = useState([])

    const submitForm = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3000/barang", {
            nama: nama.current.value,
            harga: harga.current.value
        })
        getAllBarang()
    }

    const getAllBarang = async () => {
        const response = await axios.get("http://localhost:3000/barang")
        setBarang(response.data.data)
    }

    useEffect(() => {
        getAllBarang()
    }, [])
    
    return <>
        <h1>Barang</h1>
        <h2>Daftar Barang</h2>
        <form onSubmit={submitForm}>
            <input type="text" placeholder="Nama Barang" ref={nama} />
            <input type="number" placeholder="Harga" ref={harga} />
            <button type="submit">Simpan</button>
        </form>
        <table style={{marginTop:"30px"}}>
            <thead>
                <th>Nama</th>
                <th>Harga</th>
            </thead>
            <tbody>
                {
                    barang.map((data, i) => (
                        <tr key={i}>
                            <td>{data.nama}</td>
                            <td>{data.harga}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}