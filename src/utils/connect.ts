import mongoose from "mongoose";
import config from "config";
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    return logger.info("Connected to database");
  } catch (error) {
    logger.info("could not connect to db");
    process.exit(1);
  }
}

export default connect;
