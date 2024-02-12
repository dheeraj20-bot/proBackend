const express = require('express');
const router = express.Router();

const 
    {sendotp,signup,login} 
  = require("../controllers/consultantAuth")

router.post("/consultant/sendotp", sendotp)
router.post("/consultant/register", signup)
router.post("/consultant/login", login)

module.exports = router;