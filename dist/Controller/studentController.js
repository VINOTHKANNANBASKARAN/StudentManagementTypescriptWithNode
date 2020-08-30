"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudnet = exports.updateStudent = exports.getAllStudentDetails = exports.getStudentById = exports.createStudent = void 0;
var Student_1 = require("../model/Student");
var studentUtility_1 = require("../utility/studentUtility");
var studentMap = new Map();
exports.createStudent = function (req, res, next) {
    if (req.body.id && !studentMap.has(req.body.id)) {
        var student = new Student_1.Student(req.body.name, req.body.id, req.body.rank, req.body.mark, req.body.standard, req.body.age);
        studentMap.set(req.body.id, student);
        return res.status(201)
            .json({
            message: 'Student Successfully created',
            studentRno: student.id,
            name: student.name
        });
    }
    else {
        return res.status(400)
            .json({
            message: 'Enter a valid Id for Student'
        });
    }
};
exports.getStudentById = function (req, res, next) {
    if (studentMap.has(+req.params.id)) {
        return res.status(200)
            .json({
            student: studentMap.get(+req.params.id)
        });
    }
    else {
        res.status(204).json({
            messagge: "Student with id " + req.params.id + " does not exist"
        });
    }
};
exports.getAllStudentDetails = function (req, res, next) {
    if (studentMap.size > 0) {
        return res.status(200)
            .json({
            studentList: studentUtility_1.convertMapToArray(studentMap)
        });
    }
    else {
        res.status(404).json({
            messagge: 'Student list is empty'
        });
    }
};
exports.updateStudent = function (req, res, next) {
    if (studentMap.has(+req.params.id)) {
        studentMap.set(+req.params.id, req.body);
        return res.status(202).json({
            message: 'updated successfully',
            studentRollNo: req.params.id
        });
    }
    else {
        res.status(204).json({
            message: "Student with id " + req.params.id + " does not exist"
        });
    }
};
exports.deleteStudnet = function (req, res, next) {
    if (studentMap.has(+req.params.id)) {
        studentMap.delete(+req.params.id);
        return res.status(200)
            .json({
            message: "Student with id " + +req.params.id + " is deleted successfully"
        });
    }
    else {
        res.status(204).json({
            message: "Student with id " + req.params.id + " does not exist"
        });
    }
};
