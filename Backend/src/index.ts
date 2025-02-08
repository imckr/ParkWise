const express = require('express');
import dotenv from "dotenv";
const app = express();
const port = 3000;

dotenv.config({ path: "./.env" });

app.use(express.json());

import settingRoutes from "./routes/setting.route";
import userRoutes from "./routes/user.route";

app.use("/api/setting",settingRoutes)
app.use("/api/user",userRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});