import { db } from "./connectDb.js";

export async function addArt(newArt){
    await db.collection('art').add(newArt);
}

export async function getAllArt(){
    //get collection for db
    const coll = await db.collection('art').get();
    //convert to an array of objects
    const art = coll.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //console.log array of objects
    console.table(art);
}