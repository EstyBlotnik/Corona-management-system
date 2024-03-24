const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const memberController=require('../controllers/memberController');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/details',memberController.memberDetails);
router.post('/add', memberController.getAddPage)
router.post('/add/details',memberController.addMember);
router.delete('/delete/:id', memberController.deleteMember);
router.post('/edit',memberController.getEditPage);
router.post('/edit/save', memberController.editMember);

module.exports = router;
