const express = require('express');
const mongoose = require('mongoose');
const Member =require('./models/member');
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

app.get('/add-member', async (req,res)=>{
    const member=new Member({
        firstName:'Esty ',
        lastName: 'Bl ',
        IdentityNumber: 2020,
        residenceCity: 'Ashdod',
        street:'Rashby',
        houseNumber: 19,
        dateOfBirth:1999-07-14,
        MobilePhone:"0548369314",
        
    });
    console.log(member);
    await member.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.error('Error:', err);
        });
});

// app.get('/all-members',(req,res)=>{
//     Member.find()
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });

app.get('/tab',(req,res)=>{
    res.render('table')
});
app.use('/member', memberRoutes);
app.use('/', routes);
app.use((req,res)=>{
    res.status(404).render('404')
})