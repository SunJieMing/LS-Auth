const getUsers = (req, res) => {
  // return a list of all users if the provided JWT token is valid
};

module.exports = (app) => {
  app.get('/users', getUsers);
};
