import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://metadatamongolia:CzQASAxGkiPtg5Ut@metadatacluster.6bczc.mongodb.net/?retryWrites=true&w=majority&appName=MetadataCLuster"
  );

  console.log("Connected to database");
};