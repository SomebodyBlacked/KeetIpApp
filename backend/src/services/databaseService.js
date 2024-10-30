import "dotenv/config";
import sdk from "node-appwrite";
import client from "./appwrite.js";

export const databases = new sdk.Databases(client);

export let principalDatabase;
export let notesCollection;

export async function prepareDatabase() {
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

async function fetchDatabase() {
  principalDatabase = await databases.get(
    process.env.KEETIPAPP_APPWRITE_PRINCIPAL_DATABASE_ID
  );
  notesCollection = await databases.getCollection(
    principalDatabase.$id,
    process.env.KEETIPAPP_APPWRITE_NOTES_COLLECTION_ID
  );
}

fetchDatabase();
