const { OK, BAD_REQUEST } = require('../HTTP_STATUS');
const servicer = require('../services/login');

const login = async (req, res) => {
  const request = await servicer.verifyLogin(req.body.email);
  const { email, password } = req.body;
  if (!request || request.email !== email || request.password !== password) {
    res.status(BAD_REQUEST).json({ message: 'Invalid fields' });
  } else {
    const { token } = req;
    return res.status(OK).json({ token });
  }
};

module.exports = { login };
