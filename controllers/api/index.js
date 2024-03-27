const router = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./post");
const commentRoutes = require("./comment");

router.use("/user", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
