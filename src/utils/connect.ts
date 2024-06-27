import mongoose from "mongoose";
import config from "config";

function connect() {
  const dbUri = config.get<string>("dbUri");
  return mongoose.connect(dbUri)
  .then(() => console.log("Connected to database"));
}

export default connect;
