import express from "express"
import {
    createBarangController,
    getAllBarangController
} from "./controller/BarangController.js"

const route = express.Router()

route.get("/barang", getAllBarangController)
route.post("/barang", createBarangController)

export default route