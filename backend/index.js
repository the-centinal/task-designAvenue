import express from 'express';
import  mongoose from "mongoose";
import cors from 'cors'
import router from "./routes/userRoutes.js"
var app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
const db = 'mongodb+srv://mrpraveen:praveen123@cluster0.fclruuk.mongodb.net/task-DA-data?retryWrites=true&w=majority'
mongoose.connect(db , {
 

}).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

app.use("/" , (router))
  


app.get('/' , (req, res) => {
    res.send("database connected")
})

app.listen(5002, () => {
    console.log("server is running ");
});