const express = require("express");
const data = require("./data/db");
const postsRouter = require("./posts");

const server = express();
const port = 4000;

server.use(express.json());
server.use(postsRouter);

server.get("/", (req, res) => {
	res.json({
		message: "Welcome to the API",
	});
});

// When the client makes a GET request to / api / posts:
//COMPLETE
// If there's an error in retrieving the posts from the database:
// cancel the request.
// respond with HTTP status code 500.
// return the following JSON object: { error: "The posts information could not be retrieved." }.

server.get("/api/posts", (req, res) => {
	data
		.find()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json({
				error: "The posts information could not be retrieved.",
			});
		});
});

// When the client makes a GET request to / api / posts /: id:
//COMPLETE
// If the post with the specified id is not found:
// return HTTP status code 404(Not Found).
// return the following JSON object: { message: "The post with the specified ID does not exist." }.
// If there's an error in retrieving the post from the database:
// cancel the request.
// respond with HTTP status code 500.
// return the following JSON object: { error: "The post information could not be retrieved." }.

server.get("/api/posts/:id", (req, res) => {
	data
		.findById(req.params.id)
		.then((response) => {
			if (response) {
				res.status(200).json(response);
			} else {
				res.status(404).json({
					message: "The post with the specified ID does not exist.",
				});
			}
		})
		.catch((error) => {
			res.status(500).json({
				error: "The post information could not be retrieved.",
			});
		});
});

// When the client makes a GET request to / api / posts /: id / comments:
//COMPLETE
// If the post with the specified id is not found:
// return HTTP status code 404(Not Found).
// return the following JSON object: { message: "The post with the specified ID does not exist." }.
// If there's an error in retrieving the comments from the database:
// cancel the request.
// respond with HTTP status code 500.
// return the following JSON object: { error: "The comments information could not be retrieved." }.

server.get("/api/posts/:id/comments", (req, res) => {
	data
		.findById(req.params.id)
		.then((response) => {
			if (response) {
				data.findPostComments(req.params.id).then((comment) => {
					res.status(200).json(comment);
				});
			} else {
				res.status(404).json({
					error: "The post with the specified ID does not exist.",
				});
			}
		})
		.catch((error) => {
			res.status(500).json({
				error: "The comments information could not be retrieved.",
			});
		});
});

// When the client makes a DELETE request to / api / posts /: id:
//COMPLETE
// If the post with the specified id is not found:
// return HTTP status code 404(Not Found).
// return the following JSON object: { message: "The post with the specified ID does not exist." }.

// If there's an error in removing the post from the database:
// cancel the request.
// respond with HTTP status code 500.
// return the following JSON object: { error: "The post could not be removed" }.

server.delete("/api/posts/:id/", (req, res) => {
	data.findById(req.params.id).then((response) => {
		if (response) {
			data
				.remove(req.params.id)
				.then((response) => {
					res.status(200).json({
						message: "Post Deleted",
					});
				})
				.catch((error) => {
					res.status(500).json({
						error: "The post could not be removed",
					});
				});
		} else {
			res.status(404).json({
				message: "The post with the specified ID does not exist.",
			});
		}
	});
});

// When the client makes a PUT request to / api / posts /: id:
//COMPLETE
// If the post with the specified id is not found:
// return HTTP status code 404(Not Found).
// return the following JSON object: { message: "The post with the specified ID does not exist." }.

// If the request body is missing the title or contents property:
// cancel the request.
// respond with HTTP status code 400(Bad Request).
// return the following JSON response: { errorMessage: "Please provide title and contents for the post." }.

// If there's an error when updating the post:
// cancel the request.
// respond with HTTP status code 500.
// return the following JSON object: { error: "The post information could not be modified." }.

// If the post is found and the new information is valid:
// update the post document in the database using the new information sent in the request body.
// return HTTP status code 200(OK).
// return the newly updated post.

server.put("/api/posts/:id/", (req, res) => {
	data.findById(req.params.id).then((response) => {
		if (!req.body.title) {
			return res.status(400).json({
				errorMessage: "Please provide a title for the post.",
			});
		}
		else if (!req.body.contents) {
			return res.status(400).json({
				errorMessage: "Please provide contents for the post.",
			});
		} else if (!req.body.contents && !req.body.title) {
			return res.status(400).json({
				errorMessage: "Please provide a title & contents for the post.",
			});
		} else if (response) {
			data
				.update(req.params.id, req.body)
				.then((response) => {
					res.status(200).json(req.body);
				})
				.catch((error) => {
					res.status(500).json({
						error: "The post could not be updated",
					});
				});
		} else {
			res.status(404).json({
				message: "The post with the specified ID does not exist.",
			});
		}
	});
});

server.listen(port, () => {
	console.log("server started");
});
