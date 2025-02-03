import { collection, getDocs , updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const cleanedDocs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cleanedDocs;
};

export const updateOrder = async (cart) => {

  // export const updateMovieById = (id, newData) => {
  //   const docRef = doc(db, 'movies', id);
  //   return updateDoc(docRef, newData);
  // };
  for (const item of cart) { 
  // cart.map((item) => {
    const docRef = doc(db, 'products', item.id);
    const querySnapshot = await getDoc(docRef);
    const productQuantity =  querySnapshot.data().quantity;
    const newProductQuantity = productQuantity - item.quantity;

    await updateDoc(docRef, {quantity: newProductQuantity});


  };
  
}

  

  


