const express = require("express");
const app = express();
const userRouter = require("./routers/users/user_router");
require("dotenv").config();

app.use(express.json())
app.use("/api", userRouter);

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));