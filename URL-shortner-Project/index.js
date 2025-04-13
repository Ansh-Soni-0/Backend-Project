const express = require("express");
const { connectToMongoDb } = require("./connection");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;
const path = require("path")
const staticRoute = require('./routes/staticRoute')


connectToMongoDb("mongodb://localhost:27017/short-url")
.then(() => console.log("MongoDB connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/url", urlRoute);

app.set("view engine" , "ejs")
app.set("views" , path.resolve('./views'))

app.use('/' , staticRoute)


app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));
