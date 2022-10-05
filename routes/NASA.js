const { Router } = require("express");
const { getCercanos, getObjeto, getPeligrosos } = require("../controllers/NASA");

const router = Router();

router.get('/cercanos', getCercanos)
router.get('/cercanos/:id', getObjeto)

module.exports = router;
