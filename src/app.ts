import express  from "express";
import cors from "cors";
import userRoutes from "./routes/UserRoutes";
import { ExpressAdapter } from "./interfaceAdapters/ExpressAdapter";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const adapter = new ExpressAdapter(req, res);
    adapter.send(200, "It´s works");
    // res.send("It's works!");
});

app.use("/users", userRoutes);

export default app;