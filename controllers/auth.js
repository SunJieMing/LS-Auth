const signUp = (req, res) => {
  // create a new user and return a valid JWT token to the client
};

const signIn = (req, res) => {
  // generate a JWT token if the username/password is valid
};

module.exports = (app) => {
  app.post('/signup', signUp);
  app.post('/signin', signIn);
};
