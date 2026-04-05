import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();

app.use(cors({
    origin: [process.env.CLIENT_URI],
    credentials: true,
}))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser())
app.use(express.json({limit: "16kb"}))
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.send("Hello")
})

export default app;