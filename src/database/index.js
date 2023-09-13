import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDB = async () => {
    const connectionUrl =
    "mongodb+srv://naomiwalandouw7:Tar6v4KfALNzXmvB@cluster0.3u7xwa5.mongodb.net/";

    mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("E-Commerce database connected succesfully!"))
    .catch((err) => 
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;