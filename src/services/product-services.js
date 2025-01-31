import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const cleanedDocs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cleanedDocs;
};
