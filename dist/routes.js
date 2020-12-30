"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: "Robert Garcia da Silva",
        email: "robert@email.com",
        password: 123456789,
        techs: ["nodejs", "ReactJs", "ReactNative"],
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;
