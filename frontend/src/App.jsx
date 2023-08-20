import { BrowserRouter, Routes, Route } from "react-router-dom"
import Barang from "./pages/barang/Barang"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/barang" element={<Barang />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
