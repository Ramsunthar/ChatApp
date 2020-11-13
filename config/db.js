const  mongoose  = require("mongoose");
const config = require("config");
mongoose.Promise  = require("bluebird");
const db = config.get("mongoURI");
// const  url  =  "mongodb://localhost:27017/chat";
// const  connect  =  mongoose.connect(url, { useNewUrlParser: true  });
// module.exports  =  connect;

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDB Connected....');
    } catch(err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;