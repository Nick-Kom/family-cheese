import { onSnapshot } from "firebase/firestore"
import { productsCollectionRef } from "../middleware/bindings"
import { app } from "../middleware/firebase"

function getAllProductsSnapshotCallback(callback) {
	return new Promise(async (resolve, reject) => {
		try {
			const unsubscribe = await onSnapshot(productsCollectionRef(app), callback, err =>
				console.log(`[ getAllProductsSnapshot snapshot error ]: ${err}`)
			)
			return resolve(unsubscribe)
		} catch (e) {
			console.error("[ getAllProductsSnapshot ]:", e)
			return reject()
		}
	})
}

const FirestoreService = {
	getAllProductsSnapshotCallback
}

export default FirestoreService
