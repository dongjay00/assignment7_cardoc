const express = require('express');
const routes = require('../globals/routes');

const { checkToken } = require('../middlewares/auth.js');
const tireController = require('../controllers/tireController.js');

const tireRouter = express.Router();

// 타이어 정보 조회
tireRouter.get(routes.root, checkToken, tireController.readTireList);

module.exports = tireRouter;
