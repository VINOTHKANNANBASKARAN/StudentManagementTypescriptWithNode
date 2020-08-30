"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var router_1 = __importDefault(require("./router/router"));
var app = express_1.default();
app.use(body_parser_1.json());
app.use('/student/', router_1.default);
app.listen(3000);
app.use(function (err, req, res, next) {
    return res.status(500)
        .json({
        message: 'Error in processing the request'
    });
});
