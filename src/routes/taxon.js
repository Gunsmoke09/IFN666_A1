const express = require("express");
const router = express.Router();

const controller = require("../controllers/taxon");

router.get("/", controller.getAll);
router.get("/:id", controller.get);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;