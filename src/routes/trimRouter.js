const express = require('express');
const routes = require('../globals').routes;

const { checkToken } = require('../middlewares/auth.js');
const trimController = require('../controllers/trimController.js');

const trimRouter = express.Router();

// 자동차 및 타이어 정보 저장
trimRouter.post(routes.trim, checkToken, trimController.createTrimTire);
