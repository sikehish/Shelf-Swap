const dotenv=require('dotenv').config()
const app=require('./app') //Importing the instantiated/initialsed app from app.js
const  userRouter  = require('./routes/userRouter')
const mongoose=require('mongoose')
const morgan=require('morgan');

// Set up logger
app.use(morgan('dev'))

//Routes
app.use('/api/users',userRouter)

const uri=process.env.MONGO_URI.replace('<password>', process.env.MONGO_PW)
const PORT=process.env.PORT || 3000


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
    app.listen(PORT, function () {
      console.log('Server is listening at 3000')
    })	
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

//Middleware for unhandled routes
app.use((req,res,next) => {
  res.status(404).json({
    status: 'fail', message: `The API endpoint ${req.url} does not exist!`
  })

})
								

