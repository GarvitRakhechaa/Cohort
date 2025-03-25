import mongoose from "mongoose";


const db = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected to mongodb");
    }).catch((err) => {
        console.log("err in connecting to mongodb");
    })
}

export default db