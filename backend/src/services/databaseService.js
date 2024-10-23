import sdk from "node-appwrite";
import client from "./appwrite.js";

export const databases = new sdk.Databases(client);

export let principalDatabase;
export let notesCollection;

async function prepareDatabase() {
  principalDatabase = await databases.create(sdk.ID.unique(), "KeetIpAppDb");

  notesCollection = await databases.createCollection(
    principalDatabase.$id,
    sdk.ID.unique(),
    "Notes"
  );

  await databases.createStringAttribute(
    principalDatabase.$id,
    notesCollection.$id,
    "title",
    255,
    true
  );

  await databases.createStringAttribute(
    principalDatabase.$id,
    notesCollection.$id,
    "content",
    255,
    true
  );
}

prepareDatabase();
