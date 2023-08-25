const mongoose = require('mongoose');

// Define the User schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, 'Your title cannot be less than 3 characters'],
    maxlength: [20,'Your title cannot exceed 20 characters']
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  genre:{   
    type: [String],
    required: [true, "Genre selection is necessary"]

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
  //Location of the book will be determined by the seller's location so no field for location

},{
  timestamps: true
});


// Create the User model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;