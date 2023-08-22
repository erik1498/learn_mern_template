import { createBarangService, getAllBarangService } from "../service/BarangService.js"

export const getAllBarangController = async (req, res) => {
    try {
        const response = await getAllBarangService()
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createBarangController = async (req, res) => {
    try {
        const response = await createBarangService(req.body)
        if (response) {        
            return res.status(201).json({
                message: "Create Success"
            })
        }else{
            return res.status(500).json({
                message: "Create Failed"
            })
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: error.message
        })
    }
}