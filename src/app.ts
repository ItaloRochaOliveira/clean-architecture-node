import express  from "express";
import cors from "cors";
import userRoutes from "./routes/UserRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("It's works!")
});

app.get("/users", userRoutes);

export default app;