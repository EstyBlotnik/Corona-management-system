const express = require('express');
const mongoose = require('mongoose');
const memberRoutes=require('./routes/memberRoutes');
const routes = require('./routes/routes');

//use express
const app = express();

const port = process.env.PORT || 3000;

//register view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//conect to DB
const dbURI = 'mongodb+srv://coronasystem:test1234@corona-management-syste.isk7evs.mongodb.net/?retryWrites=true&w=majority&appName=Corona-management-system';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true,})
    .then((result)=>console.log('Connected to MongoDB'))
    .catch((error)=> {
        console.error('Error connecting to MongoDB:', error);
    })

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});    

const memberController = require('./controllers/memberController')
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
  });
  
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, 'public', 'uploads')); // תיקייה בה התמונות יאוחסנו
//     },
//     filename: (req, file, cb) => {
//     // שמירת הקובץ עם שם ייחודי למניעת קונפליקטים
//     //אולי לשמור את שם הקובץ לפי השם של תעודת הזהות של הלקוח או משהו דומה
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// });

const upload = multer({ storage: storage });
app.post('/member/add/details', upload.single('image'), memberController.addMember);


app.use('/member', memberRoutes);
app.use('/', routes);
app.use((req,res)=>{
    res.status(404).render('404')
})