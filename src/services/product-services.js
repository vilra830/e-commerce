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

  for (let i =0 ; i < cart.length ; i++) {

    const docRef = doc(db, 'products', cart[i].id);
    const querySnapshot = await getDoc(docRef);
    const productQuantity =  querySnapshot.data().quantity;
    const newProductQuantity = productQuantity - cart[i].quantity;

    await updateDoc(docRef, {quantity: newProductQuantity});

  };
}


  

  


