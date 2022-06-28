const express = require("express");
const router = express.Router();

const autorHandler = require("./autor.handler");

router.get("/", (req, res) => {
    res.json(autorHandler.getAll());
});

module.exports = router;