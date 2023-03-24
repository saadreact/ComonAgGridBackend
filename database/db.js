import mongoose from "mongoose";

const Connection = async (username, password) => {
  const Url = `mongodb+srv://${username}:${password}@cluster0.jlx2xko.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(Url, {
      useUnifiedTopology: true, // dont use deprecated monitoring engine
      useNewUrlParser: true, // dont use deprecated url parser
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
