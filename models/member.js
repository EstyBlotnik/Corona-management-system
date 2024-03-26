const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  IdentityNumber:{
    type: Number,
    required: true,
  },
  residenceCity:{
    type: String,
    required: true,
  },
  street:{
    type: String,
    required: true,
  },
  houseNumber:{
    type: Number,
  },
  dateOfBirth:{
    type: Date,
    dateOnly: true,
    require: true,
  },
  phoneNumber:{
    type: String,
  },
  MobilePhone:{
    type: String,
    required: true,
  },
  vaccines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vaccine',
    }
  ],
  receivinPositiveResult:{
    type: Date,
  },
  recoveryDate:{
    type: Date,
  },
  imagePath: {
    type: String, // Changed to String for file path
  }
});

const Member = mongoose.model('Member',  memberSchema);

module.exports = Member;