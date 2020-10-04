const express = require("express");
const router = express.Router();
const data = require("./data/db");
module.exports = router;

router.get("/", (req, res) => {
	res.json({
		message: "Welcome to the API!!!",
	});
});

// When the client makes a POST request to / api / posts:
//COMPLETE
// If the request body is missing the title or contents property:
// cancel the request.
// respond with HTTP status code 400(Bad Request).
// return the following JSON response: { errorMessage: "Please provide title and contents for the post." }.
// If the information about the post is valid:
// save the new post the the database.
// return HTTP status code 201(Created).
// return the newly created post.
// If there's an error while saving the post:
// cancel the request.
// respond with HTTP status code 500(Server Error).
// return the following JSON object: { error: "There was an error while saving the post to the database" }.

router.post("/api/posts/", (req, res) => {
	if (!req.body.title) {
		return res.status(400).json({
			errorMessage: "Please provide a title for the post.",
		});
	} else if (!req.body.contents) {
		return res.status(400).json({
			errorMessage: "Please provide contents for the post.",
		});
	} else {
		data
			.insert(req.body)
			.then((response) => {
				res.status(201).json(req.body);
			})
			.catch((error) => {
				res.status(500).json({
					error: "There was an error while saving the post to the database",
				});
			});
	}
});


// When the client makes a POST request to / api / posts /: id / comments:
//COMPLETE
// If the post with the specified id is not found:
// return HTTP status code 404(Not Found).
// return the following JSON object: { message: "The post with the specified ID does not exist." }.
// If the request body is missing the text property:
// cancel the request.
// respond with HTTP status code 400(Bad Request).
// return the following JSON response: { errorMessage: "Please provide text for the comment." }.
// If the information about the comment is valid:
// save the new comment to the database.
// return HTTP status code 201(Created).
// return the newly created comment.
// If there's an error while saving the comment:
// cancel the request.
// respond with HTTP status code 500(Server Error).
// return the following JSON object: { error: "There was an error while saving the comment to the database" }.

router.post("/api/posts/:id/comments", (req, res) => {
	data.findById(req.params.id).then((response) => {
        console.log(req.body)
		if (!req.body.text) {
			return res.status(400).json({
				errorMessage: "Please provide text for the comment",
			});
        } 
        if (!response) {
			return res.status(404).json({
				message: "The post with the specified ID does not exist.",
			});
		} else {	
            data
            .insertComment(req.body)
				.then((response) => {
                    res.status(201).json(req.body.text);
				})
				.catch((error) => {
					res.status(500).json({
                        error: "There was an error while saving the comment to the database",
					});
                });
            }
		}) 

});