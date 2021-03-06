const portfolioModal = require('../models/portfolio');

const addMessage = async (req, res) => {
  try {
    await portfolioModal.create(req.body);
    res.status(200).send({ message: 'message has been sent' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addMessage };
