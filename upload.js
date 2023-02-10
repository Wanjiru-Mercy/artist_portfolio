require('dotenv').config();
const cloudinary = require('cloudinary').v2;


cloudinary.uploader.upload("src/Images/Bonzo.jpeg")
    .then(result => {console.log(result)})
    .catch(error => {console.log(error)});
