# LS-Auth

## Packages

* `bcrypt-nodejs`
* `jwt-simple`
* `passport`
* `passport-jwt`
* `passport-local`

## Topics

*	bcrypt
* salt
* rainbow tables
* never store plain-text passwords
* JWT
* token-based authentication
* stateless authentication
* JWT secret

## Assignment

Clone down this project.  Run `npm i`.
Start your MongoDB server by running `mongod` from the command line.
Implement the following routes.
You will also need to create a `config.js` file that will house your `secret`.

* [POST] `/signup` This route should add a new user to the `users` collection.  After creating the user return a `JWT` token to the client.
* [POST] `/signin` This route will receive a `username` and `password` in the request body.  If the `username` and `password` combination are valid then return a `JWT` token.
* [GET] `/users` This route will return an array of all users.  Only return the users if the user provides a valid `JWT` token in the `authentication` header.
* [POST] `/blog-posts` This route should create a new blog post and add it to the `blogPosts` collection.  This route should only work if the user provides a valid `JWT` token.
* [GET] `/blog-posts` This route should return every `blogPost` in an array.  This route should only work if the user provides a valid `JWT` token.
