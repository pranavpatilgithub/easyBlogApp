const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

//disk storage
const storage = multer.diskStorage({
    // setting folder for file
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
        // generate unique file name bcoz same name file can over-write each other.
        crypto.randomBytes(12,function(err,name){
            const fn = name.toString("hex") + path.extname(file.originalname);
            // setting the filename with cb
            cb(null, fn);
        })
        
    }
})

// export upload varaible
const upload = multer({ storage: storage });
module.exports = upload;