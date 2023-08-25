const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmail, isStrongPassword } = require('validator');

// Define the User schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, 'Your name cannot be less than 3 characters'],
    maxlength: [20,'Your name cannot exceed 20 characters']
  },
  description: {
    type: String,
    required: true,
    trim: true,
    validate: [isEmail,'Entered email address not valid!']
  },
  uid: {
    type:String,
    required: true
  },
  rent:{
    type: Number,
    required: true
  },
  buyPrice:{ //If the user doesnt want to sell the book, then this field should be left empty.
    type :Number ,
    
  }

},{
  timestamps: true
});

//Using pre middleware function to utilise the data validation used in the schema https://mongoosejs.com/docs/validation.html
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) { 
    //salt with 10 rounds will be generated and then the password will be hashed
      user.password=await bcrypt.hash(user.password, 10)
}
  next()
}
)

userSchema.methods.createToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_KEY, { expiresIn: "2d" });    
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;