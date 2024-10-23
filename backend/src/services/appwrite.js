import "dotenv/config";
import sdk from "node-appwrite";

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_APIKEY);

export default client;
