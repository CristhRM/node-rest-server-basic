const {Router} = require('express');
const { createUser, readUser, updateUser, deleteUser } = require('../controllers/users');

const router = Router();

router.post("/", createUser);
router.get("/", readUser);
router.put("/:id", updateUser);
router.delete("/", deleteUser);

module.exports = router;