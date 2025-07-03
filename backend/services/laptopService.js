const laptops = require('../models/laptops');

const createlaptops = async (data, userId) => {
  return await laptops.create({ ...data, createdBy: userId });
};

const getlaptopss = async () => {
  return await laptops.find().populate('createdBy', 'name email');
};

const getlaptopsById = async (id) => {
  return await laptops.findById(id).populate('createdBy', 'name email');
};

const updatelaptops = async (id, data) => {
  return await laptops.findByIdAndUpdate(id, data, { new: true });
};

const deletelaptops = async (id) => {
  return await laptops.findByIdAndDelete(id);
};

module.exports = { createlaptops, getlaptopss, getlaptopsById, updatelaptops, deletelaptops};
// laptops service logic 
