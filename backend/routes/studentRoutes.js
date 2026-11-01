const express = require("express")

const router = express.Router();

const {
    getstudents,
    poststudents,
    updatestudents,
    deletestudent
} = require("../controllers/studentController")

router.get("/", getstudents)
router.post("/", poststudents)
router.put("/:id", updatestudents)
router.delete("/:id", deletestudent)
module.exports = router;