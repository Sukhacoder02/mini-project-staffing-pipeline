
const express = require('express');
const { getUsers, postUser } = require('../controllers/userController');
const validator = require('../middlewares/request.validator');
// require schemas
const schemas = require('../middlewares/schemas.validator');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', validator(schemas.userSchema, 'body'), postUser);


module.exports = router;