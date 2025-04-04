const express = require("express");
const { handleGenerateNewShortURL , handleGetAnalytics , handleViweHistory} = require("../controllers/url");
const router = express.Router();

router.post("/" , handleGenerateNewShortURL);

router.get('/:shortid' , handleViweHistory)

router.get('/analytics/:shortId' , handleGetAnalytics)


module.exports = router;