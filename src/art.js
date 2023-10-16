import { db } from "./connectDb.js";

export function addArt(newArt){
    db.collection('art').add(newArt);
}
