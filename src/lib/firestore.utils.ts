import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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

export const getUser = async (uid: string) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, uid);
    const res = await getDoc(docRef);
    return res.data();
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (uid: string, data: any) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, uid);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error(error);
  }
};
