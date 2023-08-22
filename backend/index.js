import express from "express"
import cors from "cors"
import route from "./route.js"

const app = express()
app.use(cors({
    allowedHeaders:"*"
}))
app.use(express.json())

app.use(route)

app.listen("3000", () => {
    console.log("Server Running")
})