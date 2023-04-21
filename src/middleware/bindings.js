import { getFirestore, doc, collection } from "firebase/firestore"

export const db = firebase => getFirestore(firebase)

export const productByIdRef = (firebase, id) => {
	return doc(db(firebase), `products/${id}`)
}

export const productsCollectionRef = firebase => {
	return collection(db(firebase), `products`)
}
