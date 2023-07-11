const router = require("express").Router();
const {
  getUser,
  createUser,
  loginUser,
  showPurchaseHistory,
} = require("../../controllers/userController");

const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser);
router.route("/login").post(loginUser);
router.route("/me").get(authMiddleware, getUser);
router.route("/purchase-history").get(authMiddleware, showPurchaseHistory);

// Get details of a single purchase by purchase ID
router.route("/purchase-history/:purchaseId").get(authMiddleware, getSinglePurchase);

module.exports = router;
