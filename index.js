const express = require('express');
const memberRoutes=require('./routes/memberRoutes');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db/db');
const path = require('path');


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

app.use('/member', memberRoutes);
app.use('/', routes);
app.use((req,res)=>{
    res.status(404).render('404')
})