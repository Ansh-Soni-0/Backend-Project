const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleViewHistory,
  handleFindAllDataBase,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get('/getdb' , handleFindAllDataBase)

router.get("/:shortid", handleViewHistory);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
