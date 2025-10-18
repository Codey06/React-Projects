import { Client, Databases, Storage, Users } from "node-appwrite";

// ✅ Admin Client - server side
export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_KEY); // Waa in uu yahay admin key

  const databases = new Databases(client);
  const storage = new Storage(client);
  const users = new Users(client);

  return { databases, storage, users };
};

// ✅ Session Client - for logged-in users
export const createSessionClient = async (session) => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

  if (session) {
    client.setSession(session);
  }

  const databases = new Databases(client);
  const storage = new Storage(client);

  return { databases, storage };
};

