import { productByIdRef, productsCollectionRef } from "../middleware/bindings"
import { app, auth } from "../middleware/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, deleteDoc, onSnapshot, setDoc } from "firebase/firestore"

function getAllProductsSnapshotCallback(callback) {
	return new Promise(async (resolve, reject) => {
		try {
			const unsubscribe = await onSnapshot(productsCollectionRef(app), callback, err =>
				console.log(`[ getAllProductsSnapshotCallback snapshot error ]: ${err}`)
			)
			return resolve(unsubscribe)
		} catch (e) {
			console.error("[ getAllProductsSnapshotCallback ]:", e)
			return reject()
		}
	})
}

function deleteProductById(id) {
	return new Promise(async (resolve, reject) => {
		try {
			await deleteDoc(productByIdRef(app, id))
			return resolve()
		} catch (e) {
			console.error("[ deleteProductById ]:", e)
			return reject()
		}
	})
}

function changeProductById(changedProduct, id) {
	return new Promise(async (resolve, reject) => {
		try {
			await setDoc(productByIdRef(app, id), changedProduct, { merge: true })
			return resolve()
		} catch (e) {
			console.error("[ changeProductById ]:", e)
			return reject()
		}
	})
}

function addProduct(createdProduct) {
	return new Promise(async (resolve, reject) => {
		try {
			await addDoc(productsCollectionRef(app), { ...createdProduct })
			return resolve()
		} catch (e) {
			console.error("[ addProduct ]:", e)
			return reject()
		}
	})
}

function logout() {
	return new Promise(async (resolve, reject) => {
		try {
			await auth.signOut()
			return resolve()
		} catch (e) {
			console.error("[ logout ]:", e)
			return reject()
		}
	})
}

function signIn(email, password) {
	return new Promise(async (resolve, reject) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			return resolve(userCredential)
		} catch (e) {
			const errorCode = e.code
			const errorMessage = e.message
			console.log("[ signIn ]:", errorCode, errorMessage)
			return reject()
		}
	})
}

const FirestoreService = {
	signIn,
	logout,
	addProduct,
	changeProductById,
	deleteProductById,
	getAllProductsSnapshotCallback
}

export default FirestoreService
