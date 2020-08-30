"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var studentController_1 = require("../Controller/studentController");
var routes = express_1.default();
routes.get('/', studentController_1.getAllStudentDetails);
routes.get('/:id', studentController_1.getStudentById);
routes.put('/:id', studentController_1.updateStudent);
routes.post('/', studentController_1.createStudent);
routes.delete('/:id', studentController_1.deleteStudnet);
exports.default = routes;
