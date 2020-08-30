"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMapToArray = void 0;
exports.convertMapToArray = function (map) {
    if (map.size > 0) {
        var studentArray_1 = [];
        map.forEach(function (k, v) {
            //console.log('student : ' + k + 'v is ' + v)
            studentArray_1.push(k);
        });
        return studentArray_1;
    }
};
