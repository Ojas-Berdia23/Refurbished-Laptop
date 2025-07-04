const {
  createLaptop,
  getLaptop,
  getLaptopById,
  updateLaptop,
  deleteLaptop,
} = require("../services/laptopService");

const create = async (req, res) => {
  try {
    const post = await createLaptop(req.body, req.user.id);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const posts = await getLaptop();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const post = await getLaptopById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Laptop not found" });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const update = async (req, res) => {
  try {
    const post = await updateLaptop(req.params.id, req.body);

    if (!post) {
      return res.status(404).json({ msg: "Laptop not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(`Update error: ${err.message}`); // Optional: for observability
    res.status(500).json({ msg: "Internal server error" });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await deleteLaptop(req.params.id);
    if (!deleted) {
      return res.status(404).json({ msg: "Laptop not found" });
    }
    res.status(200).json({ msg: "Laptop deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = { create, getAll, getOne, update, remove };
// Laptop controller
