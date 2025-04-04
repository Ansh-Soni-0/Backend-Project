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

    return res.send({ id: shortID})
};

const handleGetAnalytics = async (req , res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.send({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory
    });
} 

const handleViweHistory = async (req , res) => {
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

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleViweHistory
}