const User = require('../models/user');
const multer = require('multer');

var fs = require('fs');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+'Esty')
    }
  });
// Create the multer upload middleware
var upload = multer({ storage: storage });
exports.uploaduser = [
    upload.single('image'), // Handle the 'image' field as a single file upload
    async (req, res) => {
      try {
        // const { category, name, instructions, preparationTime, dishes, ingredients } = req.body;
        // const ingredientsArray = JSON.parse(ingredients);
        //Array.isArray(ingredients) ? ingredients.map(String) : [];
        // console.log(req.user.email);
        // console.log(ingredientsArray);
        const firstName='esty';
        let userData = {
            firstName
        };
  
        // Check if an image was uploaded
        if (req.file) {
          // Image uploaded, include it in the recipe data
          userData.image = {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype
          };
        }
  
        // Create the recipe
        const user = new User(userData);
        await user.save();
        res.sendStatus(200);
      } catch (error) {
        console.error('Error creating recipe:', error);
        res.status(500).send('Error creating recipe. Please try again.');
      }
    },
  ];
