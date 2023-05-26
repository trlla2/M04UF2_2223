const http = require('http');
const { MongoClient } = require('mongodb');
const mongoClient = new MongoClient('mongodb://127.0.0.1:27017');
let db;
let collection;

async function dbConnect() {
  await mongoClient.connect();
    
  console.log('Connected successfully to server');
  db = mongoClient.db('todolist');
  collection = db.collection("list");

  return 'Connected to MongoDB database';
}

dbConnect()
	.then(console.log)
	.catch(console.error);

http.createServer(function (req, res) {

	//res.writeHead(200, {

	//});
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
	res.setHeader("Access-Control-Allow-Max-Age", "2592000");

	if (req.method == "POST") {
		let data = "";

		req.on('data', dataChunk => data += dataChunk);
		req.on('end', () => {
			data = JSON.parse(data);
			
			if (data.remove == "false") {
				console.log("Task deleted: " + data);
				let date = new Date(Date.now()); 
				let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  hour: 'numeric', minute: 'numeric' };

				collection.insertOne({"tasks": data.task, "time": date.toLocaleDateString('es-ES', options)});
	
				collection.find({"task": data.task}).limit(1).toArray()
					.then(task => {
						res.end(JSON.stringify(task));
					});
			}
			else {
				console.log("Deleting task " + data.task);
				collection.deleteOne({"tasks": data.task});
			}
		});
	}
	
	collection.find().toArray()
		.then(items => {
			let itemsJson = JSON.stringify(items);
		 	res.end(itemsJson);
		 });
}).listen(8080);
