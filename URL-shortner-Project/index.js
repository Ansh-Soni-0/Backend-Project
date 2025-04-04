const express = require("express");
const { connectToMongoDb } = require("./connection");
// const URL = require('./models/url')
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;


connectToMongoDb("mongodb://localhost:27017/short-url")
.then(() => console.log("MongoDB connected"));

app.use(express.json());

app.use("/url", urlRoute);

// app.get('/:shortid' , async (req , res) => {
//     const shortId = req.params.shortid;
//     const entry   = await URL.findOneAndUpdate({
//         shortId 
//     } , {$push: {
//         visitHistory: {
//             timestamp: Date.now()
//         },
//     }})

//     res.redirect(entry.redirectURL);
// })

app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));
