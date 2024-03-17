const express = require(" mongoose ");
require("dotenv").config();
const connectDB = require("./db/connect")
const app = express();
var cors = require("cors");
const authRouter = require("./routes/auth");
app.use(cors());
app.use(express.json())
app.use("/api", authRouter);
//Connecting to the DB

const port = process.env.PORT || 5000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on the port ${port}`)

        });
    }catch (error){
        console.log("error =>", error);
    }
};

start();