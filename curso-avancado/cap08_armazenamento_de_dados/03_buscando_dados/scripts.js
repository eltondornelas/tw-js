let db;

function getObjectStore() {
	return db.transaction(['Courses'], 'readwrite').objectStore('Courses');
}

const DB = {
	start() {
		return new Promise(resolve => {
			let request = indexedDB.open('TreinaWeb', 1);
			request.onsuccess = (event) => {
				db = request.result;
				resolve(this);
			}

			request.onupgradeneeded = (event) => {
				db = event.target.result;
				db.createObjectStore('Courses', { keyPath: 'id' })
			}
		})
	},
	// DB.find(id).then(result => console.log(result))
	find(id) {
		return new Promise(resolve => {
			let request = getObjectStore().get(id);

			request.onsuccess = () => {
				resolve(request.result);
			}
		});
	},
	// DB.findAll().then(result => console.log(result))
	findAll() {
		return new Promise(resolve => {
			let request = getObjectStore().getAll();

			request.onsuccess = () => {
				resolve(request.result);
			}
		});
	},
	insert(item) {
		return new Promise(resolve => {
			item.id = (new Date()).getTime();

			let request = getObjectStore().add(item);
			request.onsuccess = () => {
				resolve(item);
			}
		});
	},
	update(item) {
		return new Promise(resolve => {

		});
	},
	remove(id) {
		return new Promise(resolve => {

		});
	}
}



DB.start();