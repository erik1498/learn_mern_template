import { Sequelize } from "sequelize";
import db from "../config/Database.js";

export const getAllBarangService = async () => {
    const response = await db.query(
        `
            SELECT * FROM barang_tab
        `,
        { type: Sequelize.QueryTypes.SELECT }
    )
    return response;
}

export const createBarangService = async (data) => {
    try {
        await db.query(
            `
                INSERT INTO barang_tab (id, nama, harga) VALUES (NULL, '${data.nama}', ${data.harga})
            `,
            {
                type: Sequelize.QueryTypes.INSERT
            }
        )
        return true
    } catch (error) {
        console.log(error.message)
        return false
    }
}