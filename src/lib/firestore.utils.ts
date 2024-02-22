import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const createUser = async (uid: string, data: any) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, uid);
    await setDoc(docRef, { uid, ...data });
  } catch (error) {
    console.error(error);
  }
};
