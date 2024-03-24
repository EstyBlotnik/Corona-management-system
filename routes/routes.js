const express = require('express');
const Member =require('../models/member');
const memberController = require('../controllers/memberController');
const router = express.Router();
router.get('/',memberController.getAllMembersPage);
router.post('/login', memberController.getAllMembersPage);

module.exports = router;