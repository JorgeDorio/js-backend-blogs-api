const servicer = require('../services/post');

const newPost = async (req, res) => {
  const data = req.body;
  const { userEmail } = req;
  try {
    const request = await servicer.newPost(data, userEmail);
    return res.status(201).json(request);
  } catch (_e) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

module.exports = { newPost };
