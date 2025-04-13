const { nanoid } = require("nanoid");
const URL = require('../models/url');

const handleGenerateNewShortURL = async (req, res) => {

    const body = req.body;

    if(!body.url) return res.status(400).send({ error : "url is required"});

    const shortID = nanoid(8);

    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory : []
    });
    return res.render('home' , {
        id: shortID
    })
    // return res.send({ id: shortID})
};

const handleGetAnalytics = async (req , res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.send({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory
    });
} 

const handleViewHistory = async (req , res) => {
    const shortId = req.params.shortid;
    const entry   = await URL.findOneAndUpdate({
        shortId 
    } , {$push: {
        visitHistory: {
            timestamp: Date.now()
        },
    }})

    res.redirect(entry.redirectURL);
}

const handleFindAllDataBase = async (req , res) => {
    const data = await URL.find();
    res.send(data);
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleViewHistory,
    handleFindAllDataBase
}