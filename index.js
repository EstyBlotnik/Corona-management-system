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

app.use('/member', memberRoutes);
app.use('/', routes);
app.use((req,res)=>{
    res.status(404).render('404')
})