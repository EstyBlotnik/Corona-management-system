const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const memberController=require('../controllers/memberController');
const multer = require('multer');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });
router.post('/add/details', upload.single('image'), memberController.addMember);
router.post('/details',memberController.memberDetails);
router.post('/add', memberController.getAddPage);
router.delete('/delete/:id', memberController.deleteMember);
router.post('/edit',memberController.getEditPage);
router.post('/edit/save', memberController.editMember);
router.post('/addVaccine',memberController.getAddVaccinePage);
router.post('/addVaccine/details',memberController.addVaccine);
router.use('/addpositiveResult',memberController.addPositiveResult);
router.use('/addRecoveryDate',memberController.addRecoveryDate);
module.exports = router;
