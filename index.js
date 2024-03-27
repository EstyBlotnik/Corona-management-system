const express = require('express');
const memberRoutes=require('./routes/memberRoutes');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db/db');
const path = require('path');
const Member = require('./models/member')


//use express
const app = express();

const port = process.env.PORT || 3000;

//register view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB and start the server
connectToDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    })  
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
//     }
//   });

// const upload = multer({ storage: storage });
// app.post('/member/add/details', upload.single('image'), async(req,res)=>{
//     if (req.file) {
//         // Adding the path of the image to the object that will be stored in the base
//         const imagePath = '/uploads/'+req.file.filename;
//         req.body.imagePath = imagePath;
//     }

//     // Creating a new record in the Member model with the data received from the form and the image path
//     const member = new Member(req.body);
//     console.log(member);

//     try {
//         await member.save();
//         res.render('/'); // הפניה לדף אחר לאחר השמירה בהצלחה
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error'); // שליחת שגיאה במקרה של כישלון
//     }
// });

app.use('/member', memberRoutes);
app.use('/', routes);
app.use((req,res)=>{
    res.status(404).render('404')
})