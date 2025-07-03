const express = require('express');
const router = express.Router();
const {
  create, getAll, getOne, update, remove
} = require('../controllers/laptopController');
const { protect, allowRoles } = require('../auth/rbac');

//Client
router.get('/', protect, getAll);
router.get('/:id', protect, getOne);

//Admin
router.post('/', protect, allowRoles('admin'), create);
router.put('/:id', protect, allowRoles('admin'), update);
router.delete('/:id', protect, allowRoles('admin'), remove);

module.exports = router;

