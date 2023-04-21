import { deleteDoc, onSnapshot, setDoc } from "firebase/firestore"
import { productByIdRef, productsCollectionRef } from "../middleware/bindings"
import { app } from "../middleware/firebase"

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

const FirestoreService = {
	changeProductById,
	deleteProductById,
	getAllProductsSnapshotCallback
}

export default FirestoreService
