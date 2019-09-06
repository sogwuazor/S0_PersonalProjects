const NovelModel = require('../models/model.novel');
const connectionString = 'mongo'; //todo: replace with firebase when you are ready

class NovelService {
	static create(data) {
		let book = new NovelModel(data);

		/*make a call to check in the new book on creation*/
		return book;
	}

	static retrieve(id) {
		//make service api call to retrieve data
	}

	static update(id) {
		//make update call to api to update data
	}

	static delete(id) {
		//delete document from service if available
	}
}
