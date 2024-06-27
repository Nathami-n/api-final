import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    return console.log("Connected to database");
  } catch (error) {
    console.error("could not connect to db");
    process.exit(1);
  }
}

export default connect;
