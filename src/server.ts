import { env } from "./env";
import app from "./app";

app.listen(
    env.PORT,
    () => {
        console.log(`🚀 HTTP Server is running! url: http://localhost:${env.PORT}`);
    }
)