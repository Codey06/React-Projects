'use server';
 import { createAdminClient } from "@/config/appwrite";
 import { revalidatePath } from "next/cache";
 import { redirect } from "next/navigation";

 async function getAllRooms() {
  try{
    const {databases}= await createAdminClient()

    // Fetch rooms
   const { documents: rooms } = await databases.listDocuments(
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  process.env.NEXT_PUBLIC_APPWRITE_ROOMS_COLLECTION_ID
);


    // Revalidate the cache for this path
    // revalidatePath('/', 'layout')

    return rooms;
  } catch(error){

    console.log('Failed to get rooms',error)
    redirect('/error')

  }
  
 }


 export default getAllRooms